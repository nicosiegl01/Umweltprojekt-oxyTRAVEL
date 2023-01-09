package at.htl.Model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class FlightSearch extends PanacheEntity implements Serializable {
    public String flightNumber;
    public LocalDate timestamp_added;

    @ManyToOne
    @JoinColumn(name = "customer")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    public Customer customer;

    public FlightSearch(String flightNumber, LocalDate timestamp_added, Customer customer) {
        this.flightNumber = flightNumber;
        this.timestamp_added = timestamp_added;
        this.customer = customer;
    }

    public FlightSearch(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public FlightSearch(String flightNumber, LocalDate timestamp) {
        this.flightNumber = flightNumber;
        this.timestamp_added = timestamp;
    }

    public FlightSearch() {
    }
}
