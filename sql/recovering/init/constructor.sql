STARTUP NOMOUNT PFILE='/home/oracle/recover/initrecover.ora';

CREATE DATABASE recover
  USER sys IDENTIFIED BY oracle
  USER system IDENTIFIED BY oracle
  LOGFILE GROUP 4 ('/home/oracle/recover/log/redo1a.log', '/home/oracle/recover/log/redo1b.log') SIZE 10M,
          GROUP 5 ('/home/oracle/recover/log/redo2a.log', '/home/oracle/recover/log/redo2b.log') SIZE 10M,
          GROUP 6 ('/home/oracle/recover/log/redo3a.log', '/home/oracle/recover/log/redo3b.log') SIZE 10M
  CHARACTER SET US7ASCII
  NATIONAL CHARACTER SET AL16UTF16
  DATAFILE '/home/oracle/recover/system/instnc_ts2.dbf' SIZE 50M AUTOEXTEND ON NEXT 10M MAXSIZE UNLIMITED EXTENT MANAGEMENT LOCAL
  SYSAUX DATAFILE '/home/oracle/recover/system/instnc_ts4.dbf' SIZE 50M AUTOEXTEND ON NEXT 10M MAXSIZE UNLIMITED
  DEFAULT TABLESPACE users
    DATAFILE '/home/oracle/recover/system/instnc_ts5.dbf'
    SIZE 50M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED
  DEFAULT TEMPORARY TABLESPACE tempts1
    TEMPFILE '/home/oracle/recover/system/instnc_ts1.dbf'
    SIZE 10M REUSE
  UNDO TABLESPACE UNDOTBS1
    DATAFILE '/home/oracle/recover/system/instnc_ts3.dbf'
      SIZE 10M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;

CREATE TABLESPACE atnc_crrd_ts1_urg LOGGING 
     DATAFILE '/home/oracle/recover/ts1.dbf' 
     SIZE 10M REUSE AUTOEXTEND ON NEXT 1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;

-- create a tablespace for indexes, separate from user tablespace (optional)

CREATE TABLESPACE ind_atnc_crrd_ts1_urg LOGGING 
     DATAFILE '/home/oracle/recover/ind_ts1.dbf' 
     SIZE 10M REUSE AUTOEXTEND ON NEXT 1280K MAXSIZE UNLIMITED 
     EXTENT MANAGEMENT LOCAL;
