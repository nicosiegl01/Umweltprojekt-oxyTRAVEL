package at.htl.Endpoints;

import at.htl.Model.Customer;
import at.htl.Repository.CustomerRepository;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
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
    public boolean loginCustomer(@PathParam("mail") String mail,
                                 @PathParam("password") String password){
        return this.customerRepository.findByMail(mail, password);
    }

    @POST
    @Path("/create")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createCustomer(Customer c){
        this.customerRepository.persist(c);
    }
}
