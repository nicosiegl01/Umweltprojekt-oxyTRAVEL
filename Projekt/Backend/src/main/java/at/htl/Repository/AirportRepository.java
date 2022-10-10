package at.htl.Repository;

import at.htl.Model.Airport;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
@Transactional
public class AirportRepository implements PanacheRepository<Airport> {

}
