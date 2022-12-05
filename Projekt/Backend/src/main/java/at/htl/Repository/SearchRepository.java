package at.htl.Repository;

import at.htl.Model.FlightSearch;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

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
}
