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
    public Double co2;
    public Integer trees;

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

    public FlightSearch(String flightNumber, LocalDate timestamp_added, Double co2, Integer trees, Customer customer) {
        this.flightNumber = flightNumber;
        this.timestamp_added = timestamp_added;
        this.co2 = co2;
        this.trees = trees;
        this.customer = customer;
    }

    public FlightSearch(String flightNumber, LocalDate timestamp_added, Double co2, Customer customer) {
        this.flightNumber = flightNumber;
        this.timestamp_added = timestamp_added;
        this.co2 = co2;
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

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public LocalDate getTimestamp_added() {
        return timestamp_added;
    }

    public void setTimestamp_added(LocalDate timestamp_added) {
        this.timestamp_added = timestamp_added;
    }

    public Double getCo2() {
        return co2;
    }

    public void setCo2(Double co2) {
        this.co2 = co2;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Integer getTrees() {
        return trees;
    }

    public void setTrees(Integer trees) {
        this.trees = trees;
    }
}
