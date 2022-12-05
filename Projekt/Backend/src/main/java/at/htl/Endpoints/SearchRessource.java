package at.htl.Endpoints;

import at.htl.Model.FlightSearch;
import at.htl.Repository.SearchRepository;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.beans.Transient;
import java.util.List;

@Path("api/search")
public class SearchRessource {
    @Inject
    SearchRepository searchRepository;

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public void getCount(FlightSearch f){
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
}
