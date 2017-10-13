STARTUP NOMOUNT PFILE='/home/oracle/hsjd/parameters/inithsjd.ora';

CREATE DATABASE hsjd
  USER sys IDENTIFIED BY oracle
  USER system IDENTIFIED BY oracle
  LOGFILE GROUP 4 ('/home/oracle/hsjd/log/redo1a.log', '/home/oracle/hsjd/log/redo1b.log') SIZE 10M,
          GROUP 5 ('/home/oracle/hsjd/log/redo2a.log', '/home/oracle/hsjd/log/redo2b.log') SIZE 10M,
          GROUP 5 ('/home/oracle/hsjd/log/redo3a.log', '/home/oracle/hsjd/log/redo3b.log') SIZE 10M
  CHARACTER SET US7ASCII
  NATIONAL CHARACTER SET AL16UTF16
  DATAFILE '/home/oracle/hsjd/system/instnc_ts2.dbf' SIZE 200M AUTOEXTEND ON NEXT 10M MAXSIZE UNLIMITED EXTENT MANAGEMENT LOCAL
  SYSAUX DATAFILE '/home/oracle/hsjd/system/instnc_ts4.dbf' SIZE 100M AUTOEXTEND ON NEXT 10M MAXSIZE UNLIMITED
  DEFAULT TABLESPACE users
    DATAFILE '/home/oracle/hsjd/system/instnc_ts5.dbf'
    SIZE 100M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED
  DEFAULT TEMPORARY TABLESPACE tempts1
    TEMPFILE '/home/oracle/hsjd/system/instnc_ts1.dbf'
    SIZE 20M REUSE
  UNDO TABLESPACE UNDOTBS1
    DATAFILE '/home/oracle/hsjd/system/instnc_ts3.dbf'
      SIZE 20M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;

CREATE TABLESPACE atnc_crrd_ts1_urg LOGGING 
     DATAFILE '/home/oracle/hsjd/atnc_crrd_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE atnc_crrd_ts2_upc LOGGING 
     DATAFILE '/home/oracle/hsjd/atnc_crrd_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE atnc_crrd_ts3_ginob LOGGING 
     DATAFILE '/home/oracle/hsjd/atnc_crrd_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE atnc_crrd_ts4_ger LOGGING 
     DATAFILE '/home/oracle/hsjd/atnc_crrd_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE atnc_crrd_ts5_card LOGGING 
     DATAFILE '/home/oracle/hsjd/atnc_crrd_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE atnc_crrd_ts6_dom LOGGING 
     DATAFILE '/home/oracle/hsjd/atnc_crrd_ts6.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE enf_ts1_cudurg LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE enf_ts2_cudmed LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE enf_ts3_pab LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE enf_ts4_qui LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE enf_ts5_espqui LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE enf_ts6_pacrit LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts6.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE enf_ts7_cudinf LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts7.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;  

CREATE TABLESPACE enf_ts8_cudamb LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts8.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;  

CREATE TABLESPACE enf_ts9_cuddom LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts9.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;  

CREATE TABLESPACE enf_ts10_estr LOGGING 
     DATAFILE '/home/oracle/hsjd/enf_ts10.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE atn_ab_ts1_odon LOGGING 
     DATAFILE '/home/oracle/hsjd/atn_ab_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


CREATE TABLESPACE atn_ab_ts2_adamb LOGGING 
     DATAFILE '/home/oracle/hsjd/atn_ab_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


CREATE TABLESPACE atn_ab_ts3_infamb LOGGING 
     DATAFILE '/home/oracle/hsjd/atn_ab_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


CREATE TABLESPACE atn_ab_ts4_quiamb LOGGING 
     DATAFILE '/home/oracle/hsjd/atn_ab_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


CREATE TABLESPACE atn_ab_ts5_ginobamb LOGGING 
     DATAFILE '/home/oracle/hsjd/atn_ab_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


CREATE TABLESPACE apy_ts1_labcli LOGGING 
     DATAFILE '/home/oracle/hsjd/apy_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE apy_ts2_img LOGGING 
     DATAFILE '/home/oracle/hsjd/apy_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE apy_ts3_mednuc LOGGING 
     DATAFILE '/home/oracle/hsjd/apy_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE apy_ts4_bansan LOGGING 
     DATAFILE '/home/oracle/hsjd/apy_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE apy_ts5_antpat LOGGING 
     DATAFILE '/home/oracle/hsjd/apy_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE adm_ts1_fin LOGGING 
     DATAFILE '/home/oracle/hsjd/adm_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE adm_ts2_logic LOGGING 
     DATAFILE '/home/oracle/hsjd/adm_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE adm_ts3_pro LOGGING 
     DATAFILE '/home/oracle/hsjd/adm_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE adm_ts4_abs LOGGING 
     DATAFILE '/home/oracle/hsjd/adm_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE adm_ts5_arch LOGGING 
     DATAFILE '/home/oracle/hsjd/adm_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE adm_ts6_pac LOGGING 
     DATAFILE '/home/oracle/hsjd/adm_ts6.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


-- create a tablespace for indexes, separate from user tablespace (optional)

CREATE TABLESPACE ind_atnc_crrd_ts1_urg LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atnc_crrd_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atnc_crrd_ts2_upc LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atnc_crrd_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atnc_crrd_ts3_ginob LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atnc_crrd_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atnc_crrd_ts4_ger LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atnc_crrd_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atnc_crrd_ts5_card LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atnc_crrd_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atnc_crrd_ts6_dom LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atnc_crrd_ts6.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_enf_ts1_cudurg LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_enf_ts2_cudmed LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_enf_ts3_pab LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_enf_ts4_qui LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_enf_ts5_espqui LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_enf_ts6_pacrit LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts6.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_enf_ts7_cudinf LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts7.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_enf_ts8_cudamb LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts8.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


CREATE TABLESPACE ind_enf_ts9_cuddom LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts9.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


CREATE TABLESPACE ind_enf_ts10_estr LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_enf_ts10.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;


CREATE TABLESPACE ind_atn_ab_ts1_odon LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atn_ab_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atn_ab_ts2_adamb LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atn_ab_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atn_ab_ts3_infamb LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atn_ab_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atn_ab_ts4_quiamb LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atn_ab_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_atn_ab_ts5_ginobamb LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_atn_ab_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_apy_ts1_labcli LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_apy_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_apy_ts2_img LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_apy_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_apy_ts3_mednuc LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_apy_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_apy_ts4_bansan LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_apy_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_apy_ts5_antpat LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_apy_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_adm_ts1_fin LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_adm_ts1.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_adm_ts2_logic LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_adm_ts2.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_adm_ts3_pro LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_adm_ts3.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_adm_ts4_abs LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_adm_ts4.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_adm_ts5_arch LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_adm_ts5.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

CREATE TABLESPACE ind_adm_ts6_pac LOGGING 
     DATAFILE '/home/oracle/hsjd/ind_adm_ts6.dbf' 
     SIZE 20M REUSE AUTOEXTEND ON NEXT  1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;