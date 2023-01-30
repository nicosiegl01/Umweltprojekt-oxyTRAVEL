package at.htl.Repository;

import at.htl.Model.Tree;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;

@ApplicationScoped
public class TreeRepository implements PanacheRepository<Tree> {
    @Inject
    EntityManager em;
}
