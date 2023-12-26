package Azs1212.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Azs1212.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Колонка
 */
@Entity(name = "IISAzs1212Колонка")
@Table(schema = "public", name = "Колонка")
public class Kolonka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "состояние")
    private String состояние;

    @OneToMany(mappedBy = "kolonka", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Sostav> sostavs;


    public Kolonka() {
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