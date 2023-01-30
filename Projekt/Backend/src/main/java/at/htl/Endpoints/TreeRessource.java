package at.htl.Endpoints;

import at.htl.Model.Tree;
import at.htl.Repository.TreeRepository;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("api/tree")
public class TreeRessource {
   @Inject
    TreeRepository treeRepository;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getTree")
    public Tree getTree(){
        return Tree.findAll().firstResult();
    }
}
