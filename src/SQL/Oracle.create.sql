



CREATE TABLE "Состав"
(

	"primaryKey" RAW(16) NOT NULL,

	"Пистолет" RAW(16) NOT NULL,

	"Колонка" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РегистОстатков"
(

	"primaryKey" RAW(16) NOT NULL,

	"Оплата" RAW(16) NOT NULL,

	"Резервуар" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Пистолет"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"состояние" NVARCHAR2(11) NULL,

	"СправочникЦен" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Азс"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Название" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Состояние" NVARCHAR2(11) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Оплата"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Количество" NUMBER(10) NULL,

	"ТипОплаты" NVARCHAR2(17) NULL,

	"Сумма" FLOAT(126) NULL,

	"Колонка" RAW(16) NOT NULL,

	"Терминал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СправочникЦен"
(

	"primaryKey" RAW(16) NOT NULL,

	"Цена" FLOAT(126) NULL,

	"ТипТоплива" NVARCHAR2(2) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Карты"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерКарты" NUMBER(10) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"Бонусы" NUMBER(10) NULL,

	"Оплата" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Терминал"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Азс" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Колонка"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"состояние" NVARCHAR2(11) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Резервуар"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"ТипТоплива" NVARCHAR2(2) NULL,

	"Обьем" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Состав"
	ADD CONSTRAINT "Состав_FПисто_3718" FOREIGN KEY ("Пистолет") REFERENCES "Пистолет" ("primaryKey");

CREATE INDEX "Состав_IПистолет" on "Состав" ("Пистолет");

ALTER TABLE "Состав"
	ADD CONSTRAINT "Состав_FКолонка_0" FOREIGN KEY ("Колонка") REFERENCES "Колонка" ("primaryKey");

CREATE INDEX "Состав_IКолонка" on "Состав" ("Колонка");

ALTER TABLE "РегистОстатков"
	ADD CONSTRAINT "РегистОстатко_798" FOREIGN KEY ("Оплата") REFERENCES "Оплата" ("primaryKey");

CREATE INDEX "РегистОстатк_9667" on "РегистОстатков" ("Оплата");

ALTER TABLE "РегистОстатков"
	ADD CONSTRAINT "РегистОстатк_4925" FOREIGN KEY ("Резервуар") REFERENCES "Резервуар" ("primaryKey");

CREATE INDEX "РегистОстатк_5242" on "РегистОстатков" ("Резервуар");

ALTER TABLE "Пистолет"
	ADD CONSTRAINT "Пистолет_FСпр_7711" FOREIGN KEY ("СправочникЦен") REFERENCES "СправочникЦен" ("primaryKey");

CREATE INDEX "Пистолет_IСпр_1684" on "Пистолет" ("СправочникЦен");

ALTER TABLE "Оплата"
	ADD CONSTRAINT "Оплата_FКолонка_0" FOREIGN KEY ("Колонка") REFERENCES "Колонка" ("primaryKey");

CREATE INDEX "Оплата_IКолонка" on "Оплата" ("Колонка");

ALTER TABLE "Оплата"
	ADD CONSTRAINT "Оплата_FТерми_8059" FOREIGN KEY ("Терминал") REFERENCES "Терминал" ("primaryKey");

CREATE INDEX "Оплата_IТерминал" on "Оплата" ("Терминал");

ALTER TABLE "Карты"
	ADD CONSTRAINT "Карты_FОплата_0" FOREIGN KEY ("Оплата") REFERENCES "Оплата" ("primaryKey");

CREATE INDEX "Карты_IОплата" on "Карты" ("Оплата");

ALTER TABLE "Терминал"
	ADD CONSTRAINT "Терминал_FАзс_0" FOREIGN KEY ("Азс") REFERENCES "Азс" ("primaryKey");

CREATE INDEX "Терминал_IАзс" on "Терминал" ("Азс");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


