package at.htl.Model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import java.io.Serializable;

@Entity
public class FlightSearch extends PanacheEntity implements Serializable {
    String flightNumber;
}
