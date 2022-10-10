package at.htl.Repository;

import at.htl.Model.Customer;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.ApplicationPath;

@ApplicationScoped
public class CustomerRepository implements PanacheRepository<Customer> {
}
