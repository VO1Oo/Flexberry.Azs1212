package Azs1212.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Azs1212.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Карты
 */
@Entity(name = "IISAzs1212Карты")
@Table(schema = "public", name = "Карты")
public class Karty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКарты")
    private Integer номеркарты;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @Column(name = "Бонусы")
    private Integer бонусы;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Oplata")
    @Convert("Oplata")
    @Column(name = "Оплата", length = 16, unique = true, nullable = false)
    private UUID _oplataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Oplata", insertable = false, updatable = false)
    private Oplata oplata;


    public Karty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКарты() {
      return номеркарты;
    }

    public void setНомерКарты(Integer номеркарты) {
      this.номеркарты = номеркарты;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }

    public Integer getБонусы() {
      return бонусы;
    }

    public void setБонусы(Integer бонусы) {
      this.бонусы = бонусы;
    }


}