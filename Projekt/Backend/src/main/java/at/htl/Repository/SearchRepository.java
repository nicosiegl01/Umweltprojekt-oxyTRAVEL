package at.htl.Repository;

import at.htl.Model.FlightSearch;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

@ApplicationScoped
public class SearchRepository implements PanacheRepository<FlightSearch> {
    @Inject
    EntityManager em;

    public Long getCount(){
        String sql = "SELECT COUNT(f.flightNumber) FROM FlightSearch f";
        TypedQuery q = em.createQuery(sql,Long.class);
        long count = (long)q.getSingleResult();
        return count;
    }

    public List<FlightSearch> getSearchesByUser(String mail){
        String sql = "SELECT f FROM FlightSearch f WHERE f.customer.mail LIKE :mail";
        TypedQuery q = em.createQuery(sql, FlightSearch.class);
        q.setParameter("mail",mail);
        return q.getResultList();
    }
}
