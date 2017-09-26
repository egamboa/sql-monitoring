EXTREMELY minimal manual Oracle database creation script

 

1.  Set your ORACLE_SID

 

export ORACLE_SID=test

export ORACLE_HOME=/path/to/oracle/home

 

2.  Create a minimal init.ora

 

# $ORACLE_HOME/dbs/init<sid>.ora
 
control_files = (/path/to/control1.ctl,/path/to/control2.ctl,/path/to/control3.ctl)
undo_management = AUTO
undo_tablespace = UNDOTBS1
db_name = test
db_block_size = 8192
sga_max_size = 1073741824 #one gig
sga_target = 1073741824 #one gig
 

3.  Create a password file

 

$ORACLE_HOME/bin/orapwd file=$ORACLE_HOME/dbs/pwd<sid>.ora password=oracle entries=5

 

4.  Start the instance

 

sqlplus / as sysdba

startup nomount

 

5.  Create the database

 

create database test
logfile group 1 ('/path/to/redo1.log') size 100M,
            group 2 ('/path/to/redo2.log') size 100M,
            group 3 ('/path/to/redo3.log') size 100M
character set WE8ISO8859P1
national character set utf8
datafile '/path/to/system.dbf' size 500M autoextend on next 10M maxsize unlimited extent management local
sysaux datafile '/path/to/sysaux.dbf' size 100M autoextend on next 10M maxsize unlimited
undo tablespace undotbs1 datafile '/path/to/undotbs1.dbf' size 100M
default temporary tablespace temp tempfile '/path/to/temp01.dbf' size 100M;
 

Note: there's some other things you can do here, like "ARCHIVELOG" "SET TIME_ZONE =" and "USER SYS IDENTIFIED BY password" and "USER SYSTEM IDENTIFIED BY password"

 

6.  Run catalog and catproc 

@?/rdbms/admin/catalog.sql

@?/rdbms/admin/catproc.sql
 

7.  Change passwords

alter user sys identified by whatever;

alter user system identified by whatever;

OMF: minimal manual Oracle create database syntax

 

1.  Set your ORACLE_SID

 

export ORACLE_SID=test
export ORACLE_HOME=/path/to/oracle/home
 

2.  Create a minimal init.ora

 

# $ORACLE_HOME/dbs/init<sid>.ora
 
control_files = (/path/to/control1.ctl,/path/to/control2.ctl,/path/to/control3.ctl)
undo_management = AUTO
db_name = test
db_block_size = 8192
sga_max_size = 1073741824 #one gig
sga_target = 1073741824 #one gig
db_create_file_dest = /path/to/datafile/location #OMF
db_create_online_log_dest_1 = /path/to/first/redo_and_control_file/location #OMF
db_create_online_log_dest_2 = /path/to/second/redo_and_control_file/location #OMF
db_recovery_file_dest = /path/to/flash/recovery/area #OMF
#note it’s a good idea to also have background_dump_dest, user_dump_dest, and core_dump_dest here as well
 

3.  Create a password file

$ORACLE_HOME/bin/orapwd file=$ORACLE_HOME/dbs/pwd<sid>.ora password=oracle entries=5

 

4.  Start the instance

sqlplus / as sysdba

startup nomount

 

5.  Create the database

create database test
character set WE8ISO8859P1
national character set utf8
undo tablespace undotbs1
default temporary tablespace temp;
 

You can even do this and it will work, the ultimate in minimalism:

create database test;

 

Note: There's some other things you can do here, like "ARCHIVELOG" "SET TIME_ZONE =" and "USER SYS IDENTIFIED BY password" and "USER SYSTEM IDENTIFIED BY password"

Note 2:  This is so minimal because you are using Oracle Managed Files as seen in #2

 

6.  Run catalog and catproc

@?/rdbms/admin/catalog.sql

@?/rdbms/admin/catproc.sql

 

Standard create Oracle database syntax

After creating your init.ora file with the appropriate parameters you can use the "create database" command in SQL*Plus to create a database:

Make sure that your have your $ORACLE_HOME and $ORACLE_SID set properly and that you sign-on as SYSDBA:

startup nomount;

CREATE CONTROLFILE REUSE DATABASE "OLDLSQ" NORESETLOGS 
NOARCHIVELOG
MAXLOGFILES 16
MAXLOGMEMBERS 2
MAXDATAFILES 240
MAXINSTANCES 1
MAXLOGHISTORY 113
LOGFILE
GROUP 1 ('/u03/oradata/oldlsq/log1a.dbf',
'/u03/oradata/olslsq/log1b.dbf') SIZE 30M,
GROUP 2 ('/u04/oradata/oldlsq/log2a.dbf',
'/u04/oradata/oldlsq/log2b.dbf') SIZE 30M
DATAFILE
'/u01/oradata/oldlsq/system01.dbf',
'/u01/oradata/oldlsq/mydatabase.dbf'
;


This is just an abbreviated sample of the Oracle create database command and there are many more options: