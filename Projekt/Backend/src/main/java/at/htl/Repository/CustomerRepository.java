package at.htl.Repository;

import at.htl.Model.Customer;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.ws.rs.ApplicationPath;

@ApplicationScoped
public class CustomerRepository implements PanacheRepository<Customer> {
    @Inject
    EntityManager em;

    public boolean findByMail(String mail, String password){
        String jpql = "SELECT c FROM Customer c where c.mail=:name and c.password=:password";
        try{
            TypedQuery q = em.createQuery(jpql, Customer.class);
            q.setParameter("name", mail);
            q.setParameter("password",password);
            Customer c = (Customer) q.getSingleResult();
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
