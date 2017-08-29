GRANT SELECT ANY DICTIONARY TO SYSTEM; 
drop function SGASIZE;
CREATE FUNCTION SGASIZE(PName in VARCHAR2)
   RETURN NUMBER is
   Vresultado number;
      BEGIN 
	SELECT BYTES 
	INTO Vresultado 
	FROM v$sgainfo 
	WHERE name= PName;
    RETURN(Vresultado); 
END;
show error