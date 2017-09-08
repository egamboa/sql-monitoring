CREATE FUNCTION consumoBytes(Ptablespace in VARCHAR2)
   RETURN NUMBER is
   Vresultado number;
      BEGIN
        SELECT   Sum(VSIZE(user_tab_columns.column_name)) Sumatoria
    INTO Vresultado
FROM DBA_TABLESPACES
INNER JOIN dba_tables ON dba_tablespaces.TABLESPACE_NAME = dba_tables.TABLESPACE_NAME
INNER JOIN user_tab_columns ON dba_tables.table_name = user_tab_columns.table_name
WHERE dba_tablespaces.TABLESPACE_NAME = Ptablespace; 
       
   RETURN(Vresultado);
END; 
 
SELECT /* + RULE */
        df.tablespace_name AS "Tablespace"
        ,df.bytes / (1024 * 1024) AS "Size (MB)"
        ,fs.bytes / (1024 * 1024) AS "Free (MB)"
    ,(df.bytes / (1024 * 1024))*0.85 AS "HWM (MB)"
    , consumoBytes(df.tablespace_name)AS "CONSUMO"
FROM (
        SELECT tablespace_name
               ,Sum(bytes) AS bytes
        FROM dba_free_space
        GROUP BY tablespace_name
        ) fs
        ,(
                SELECT tablespace_name
                       ,SUM(bytes) AS bytes
               FROM dba_data_files
               GROUP BY tablespace_name
               ) df
WHERE fs.tablespace_name = df.tablespace_name
ORDER BY 3 DESC;