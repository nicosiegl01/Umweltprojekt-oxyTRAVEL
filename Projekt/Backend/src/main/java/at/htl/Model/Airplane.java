package at.htl.Model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;

@Entity
public class Airplane extends PanacheEntity {
    public String airplaneType;
    public double fuel;



    public Airplane() {
    }
}
