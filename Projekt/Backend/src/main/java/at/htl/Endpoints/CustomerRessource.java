package at.htl.Endpoints;

import at.htl.Model.Customer;
import at.htl.Repository.CustomerRepository;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.net.URI;
import java.util.List;

@Path("/api")
public class CustomerRessource {
    @Inject
    CustomerRepository customerRepository;

    @GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> getAllCustomer(){
        return customerRepository.listAll();
    }

    @GET
    @Path("/login/{mail}/{password}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer loginCustomer(@PathParam("mail") String mail,
                                 @PathParam("password") String password){
        return this.customerRepository.findByMail(mail, password);
    }

    @POST
    @Path("/create")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createCustomer(Customer c, @Context UriInfo context){
        if(this.customerRepository.findEmail(c.mail)!= null){
            return Response.status(Response.Status.FORBIDDEN).build();
        }

        URI uri = context.getAbsolutePathBuilder().path(String.valueOf(c.id)).build();

        this.customerRepository.persist(c);
        return Response.status(Response.Status.NO_CONTENT).entity(uri).build();
    }

    @GET
    @Path("/findByMail/{mail}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer findCustomerByMail(@PathParam("mail") String mail){
        return this.customerRepository.findEmail(mail);
    }
}
