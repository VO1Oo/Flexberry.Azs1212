package Azs1212.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Azs1212.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Резервуар
 */
@Entity(name = "IISAzs1212Резервуар")
@Table(schema = "public", name = "Резервуар")
public class Rezervuar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ТипТоплива")
    private String типтоплива;

    @Column(name = "Обьем")
    private Integer обьем;


    public Rezervuar() {
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

    public String getТипТоплива() {
      return типтоплива;
    }

    public void setТипТоплива(String типтоплива) {
      this.типтоплива = типтоплива;
    }

    public Integer getОбьем() {
      return обьем;
    }

    public void setОбьем(Integer обьем) {
      this.обьем = обьем;
    }


}