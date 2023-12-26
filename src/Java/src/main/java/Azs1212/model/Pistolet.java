package Azs1212.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Azs1212.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Пистолет
 */
@Entity(name = "IISAzs1212Пистолет")
@Table(schema = "public", name = "Пистолет")
public class Pistolet {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "состояние")
    private String состояние;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravochnikCen")
    @Convert("SpravochnikCen")
    @Column(name = "СправочникЦен", length = 16, unique = true, nullable = false)
    private UUID _spravochnikcenid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravochnikCen", insertable = false, updatable = false)
    private SpravochnikCen spravochnikcen;


    public Pistolet() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getсостояние() {
      return состояние;
    }

    public void setсостояние(String состояние) {
      this.состояние = состояние;
    }


}