package at.htl.Model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Customer extends PanacheEntity implements Serializable {
    public String mail;
    public String password;

    public Customer(String mail, String password) {
        this.mail = mail;
        this.password = password;
    }

    public Customer() {
    }
}
