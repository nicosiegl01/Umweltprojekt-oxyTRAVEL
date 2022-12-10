package at.htl.Model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity
public class Airport extends PanacheEntity implements Serializable{
    @Column(unique = true)
    public String name;
    public String shortName;
    public String recordid;
    public float latitude;
    public float longitude;
}
