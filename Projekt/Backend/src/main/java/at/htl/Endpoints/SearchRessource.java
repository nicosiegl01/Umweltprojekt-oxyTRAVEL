package at.htl.Endpoints;

import at.htl.DTO.FlightSearchDTO;
import at.htl.Model.FlightSearch;
import at.htl.Repository.SearchRepository;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("api/search")
public class SearchRessource {
    @Inject
    SearchRepository searchRepository;

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public void getCount(FlightSearchDTO flight){
        FlightSearch f = new FlightSearch(flight.flightnumber,flight.timestamp_added, flight.co2,flight.trees,flight.customer);
        this.searchRepository.persist(f);
    }

    @GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public List<FlightSearch> getAll(){
        return this.searchRepository.listAll();
    }

    @GET
    @Path("/count")
    @Produces(MediaType.APPLICATION_JSON)
    public Long getCounter(){
        return this.searchRepository.getCount();
    }

    @GET
    @Path("/findByUser/{mail}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<FlightSearch> findByUser(@PathParam("mail") String mail){
        return this.searchRepository.getSearchesByUser(mail);
    }

    @GET
    @Transactional
    @Path("/flight/{iata}")
    public void getFlightNumber(@PathParam("iata") String flight){
        FlightSearch f = new FlightSearch(flight);
        this.searchRepository.persist(f);
    }
}
