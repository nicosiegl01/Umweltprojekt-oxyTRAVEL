package at.htl.Endpoints;

import at.htl.Model.Airport;
import at.htl.Repository.AirportRepository;

import javax.inject.Inject;
import javax.print.attribute.standard.Media;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/api/airport")
public class AirportRessource {
    @Inject
    AirportRepository airportRepository;

    @POST
    @Path("/post")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createAirport(Airport airport){
        System.out.println(airport.toString());
        this.airportRepository.persist(airport);
    }

    @GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Airport> getAllAirports(){
        return this.airportRepository.listAll();
    }

    @GET
    @Path("/findById/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Airport getAirportById(@PathParam("id") Long id){
        return this.airportRepository.findById(id);
    }

    @GET
    @Path("/findById/{name}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Airport getAirportById(@PathParam("name") String name){
        return (Airport) this.airportRepository.find("name=?",name);
    }

    @GET
    @Path("findAirportsByName/{air1}/{air2}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Airport> findAirportsByName(@PathParam("air1") String airport1,
                                            @PathParam("air2") String airport2){
        //return this.airportRepository.find("na");
        return this.airportRepository.getAirports(airport1,airport2);
    }

}
