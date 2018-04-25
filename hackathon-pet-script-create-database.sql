CREATE SEQUENCE public."Order_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public."Order_id_seq"
    OWNER TO postgres;
	
CREATE SEQUENCE public."Pet_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public."Pet_id_seq"
    OWNER TO postgres;
	
-- Table: public."Pet"

-- DROP TABLE public."Pet";

CREATE TABLE public."Pet"
(
    id bigint NOT NULL DEFAULT nextval('"Pet_id_seq"'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    photo text COLLATE pg_catalog."default",
    tags text COLLATE pg_catalog."default",
    "createdAt" date,
    "updatedAt" date,
    CONSTRAINT "Pet_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Pet"
    OWNER to postgres;
	
-- Table: public."Order"

-- DROP TABLE public."Order";

CREATE TABLE public."Order"
(
    id bigint NOT NULL DEFAULT nextval('"Order_id_seq"'::regclass),
    quantity integer NOT NULL,
    "shipDate" date NOT NULL,
    status integer NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    "petId" bigint NOT NULL,
    CONSTRAINT "Order_pkey" PRIMARY KEY (id),
    CONSTRAINT "pet_order_FK" FOREIGN KEY ("petId")
        REFERENCES public."Pet" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Order"
    OWNER to postgres;