package Azs1212.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Azs1212.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: РегистОстатков
 */
@Entity(name = "IISAzs1212РегистОстатков")
@Table(schema = "public", name = "РегистОстатков")
public class RegistOstatkov {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Oplata")
    @Convert("Oplata")
    @Column(name = "Оплата", length = 16, unique = true, nullable = false)
    private UUID _oplataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Oplata", insertable = false, updatable = false)
    private Oplata oplata;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Rezervuar")
    @Convert("Rezervuar")
    @Column(name = "Резервуар", length = 16, unique = true, nullable = false)
    private UUID _rezervuarid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Rezervuar", insertable = false, updatable = false)
    private Rezervuar rezervuar;


    public RegistOstatkov() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}