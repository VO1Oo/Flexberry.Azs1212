package Azs1212.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Azs1212.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СправочникЦен
 */
@Entity(name = "IISAzs1212СправочникЦен")
@Table(schema = "public", name = "СправочникЦен")
public class SpravochnikCen {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Double цена;

    @Column(name = "ТипТоплива")
    private String типтоплива;


    public SpravochnikCen() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }

    public String getТипТоплива() {
      return типтоплива;
    }

    public void setТипТоплива(String типтоплива) {
      this.типтоплива = типтоплива;
    }


}