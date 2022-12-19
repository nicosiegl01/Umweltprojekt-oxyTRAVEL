package at.htl.Model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;

@Entity
public class Tree extends PanacheEntity {
    public String treeType;
    public double consumption;

    public Tree(String treeType, double consumption) {
        this.treeType = treeType;
        this.consumption = consumption;
    }

    public Tree() {
    }
}
