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
}