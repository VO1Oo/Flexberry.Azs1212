package Azs1212.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Azs1212.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Оплата
 */
@Entity(name = "IISAzs1212Оплата")
@Table(schema = "public", name = "Оплата")
public class Oplata {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "ТипОплаты")
    private String типоплаты;

    @Column(name = "Сумма")
    private Double сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kolonka")
    @Convert("Kolonka")
    @Column(name = "Колонка", length = 16, unique = true, nullable = false)
    private UUID _kolonkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kolonka", insertable = false, updatable = false)
    private Kolonka kolonka;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Terminal")
    @Convert("Terminal")
    @Column(name = "Терминал", length = 16, unique = true, nullable = false)
    private UUID _terminalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Terminal", insertable = false, updatable = false)
    private Terminal terminal;

    @OneToMany(mappedBy = "oplata", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Karty> kartys;


    public Oplata() {
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

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public String getТипОплаты() {
      return типоплаты;
    }

    public void setТипОплаты(String типоплаты) {
      this.типоплаты = типоплаты;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}