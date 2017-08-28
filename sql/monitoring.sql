set linesize 200

conn system/oracle

-- Para desbloquear hr
alter user monitoring account unlock;

--Para cambiar la clave
alter user monitoring identified by monitoring;

conn monitoring/monitoring

