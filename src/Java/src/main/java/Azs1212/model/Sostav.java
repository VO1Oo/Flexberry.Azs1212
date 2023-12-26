package Azs1212.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Azs1212.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Состав
 */
@Entity(name = "IISAzs1212Состав")
@Table(schema = "public", name = "Состав")
public class Sostav {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Pistolet")
    @Convert("Pistolet")
    @Column(name = "Пистолет", length = 16, unique = true, nullable = false)
    private UUID _pistoletid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Pistolet", insertable = false, updatable = false)
    private Pistolet pistolet;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kolonka")
    @Convert("Kolonka")
    @Column(name = "Колонка", length = 16, unique = true, nullable = false)
    private UUID _kolonkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kolonka", insertable = false, updatable = false)
    private Kolonka kolonka;


    public Sostav() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}