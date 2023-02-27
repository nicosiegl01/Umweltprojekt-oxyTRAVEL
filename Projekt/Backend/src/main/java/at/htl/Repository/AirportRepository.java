package at.htl.Repository;

import at.htl.Model.Airport;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
@Transactional
public class AirportRepository implements PanacheRepository<Airport> {
    @Inject
    EntityManager em;
    public List<Airport> getAirports(String airport1, String airport2){
        String sql = "SELECT a FROM Airport a WHERE a.shortName = :name1 OR a.shortName = :name2";
        TypedQuery q = em.createQuery(sql, Airport.class);
        q.setParameter("name1", airport1);
        q.setParameter("name2", airport2);
        return q.getResultList();
    }

    public Airport findAirportById(Long id){
        String sql = "SELECT a FROM Airport a WHERE a.id = :id";
        TypedQuery q = em.createQuery(sql, Airport.class);
        q.setParameter("id", id);
        try{
            return (Airport) q.getSingleResult();
        }catch (Exception e){
            return null;
        }
    }

    public Airport findAirportByCityName(String cityName){
        String pattern = "%"+cityName+"%";
        String sql = "SELECT a FROM Airport a WHERE a.name LIKE :cityName";
        TypedQuery q = em.createQuery(sql, Airport.class);
        q.setParameter("cityName", pattern);
        try{
            return (Airport) q.getResultList().get(0);
        }catch (Exception e){
            System.out.print("Error: " + e.getMessage() + "");
            return null;
        }
    }

    public List<Airport> getAllAirports(){
        String sql = "SELECT distinct a FROM Airport a";
        TypedQuery q = em.createQuery(sql, Airport.class);
        return q.getResultList();
    }
}
