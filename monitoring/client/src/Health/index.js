import React, { Component } from 'react';
import { Row, Col, Table, Alert } from 'react-bootstrap';

class Health extends Component {
  render() {
    return <section>
      <Row>
        <Col sm={12}>
          <Table>
            <tbody>
              <tr>
                <td><h2>Database name:</h2></td>
                <td><h2><strong>HSJD</strong></h2></td>
              </tr>
              <tr>
                <td><h2>Open Mode:</h2></td>
                <td><h2><strong>READ WRITE</strong></h2></td>
              </tr>
              <tr>
                <td><h2>Log Mode:</h2></td>
                <td><h2><strong>NOARCHIVELOG</strong></h2></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h2>General Health</h2>
          <Alert bsStyle="success">
            Healthy, Value -> 0.35 (Tends to 0)
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Total Weight</th>
                <th>Acceptable %</th>
                <th>Warning %</th>
                <th>Danger %</th>
                <th>Current %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SGA Usage</td>
                <td>0.25</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>0.02</strong></td>
              </tr>
              <tr>
                <td>SQL Usage</td>
                <td>0.2</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>0.09</strong></td>
              </tr>
              <tr>
                <td>DB Blocks</td>
                <td>0.25</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>0.11</strong></td>
              </tr>
              <tr>
                <td>Usage of Tablespace space</td>
                <td>0.2</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>0.13</strong></td>
              </tr>
              <tr>
                <td>Usage of Conections</td>
                <td>0.1</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>0</strong></td>
              </tr>
              <tr>
                <td><strong>Totals</strong></td>
                <td>1</td>
                <td colSpan="3"></td>
                <td><strong>0.35</strong></td>
              </tr>
            </tbody>
          </Table>

        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Table>
            <tbody>
              <tr>
                <td><h2>SGA Usage</h2></td>
                <td>
                  <h4>
                    <p> mem_total = select to_number(value) from v$parameter where name ='shared_pool_size'; </p>
                    <p> mem_free = select bytes from v$sgastat where pool = 'shared pool' and name = 'free memory'; </p>
                    <p> prom_shared_pool = (mem_total / mem_free)*100 </p>
                  </h4>
                </td>
              </tr>
              <tr>
                <td><h2>SQL Usage</h2></td>
                <td>
                  <h4>
                    <p> SELECT USERNAME, sum(VALUE/1024/1024) "Current memory" FROM V$SESSION sess, V$SESSTAT stat, V$STATNAME name WHERE stat.STATISTIC# = name.STATISTIC# AND name.NAME = 'session uga memory' AND TRIM(username) IS NOT NULL group by USERNAME; </p>
                    <p> memoriaTotal= select sum(bytes/2048)from v$sgastat; </p>
                  </h4>
                </td>
              </tr>
              <tr>
                <td><h2>DB Blocks</h2></td>
                <td>
                  <h4>
                    <p>procesos_total= select COUNT(*) from v$lock l, v$session s where l.sid = s.sid;</p>
                    <p>Bloqueos_total = select COUNT(*) blocks from v$lock l, v$session s where l.sid = s.sid AND l.block =1;</p>
                    <p>promedio_de_bloqueos= (Bloqueos_total / procesos_total)</p>
                  </h4>
                </td>
              </tr>
              <tr>
                <td><h2>Usage of Tablespace space</h2></td>
                <td>
                  <h4>
                    <p>SELECT df.tablespace_name AS \"tablespace\", df.bytes / (1024 * 1024) AS \"max_size\", fs.bytes / (1024 * 1024) AS \"free\" FROM ( SELECT tablespace_name, Sum(bytes) AS bytes FROM dba_free_space GROUP BY tablespace_name) fs,( SELECT tablespace_name ,SUM(bytes) AS bytes FROM dba_data_files GROUP BY tablespace_name ) df WHERE fs.tablespace_name = df.tablespace_name ORDER BY 3 DESC</p>
                    <p>"SELECT Sum(VSIZE(user_tab_columns.column_name)) Sumatoria FROM DBA_TABLESPACES INNER JOIN dba_tables ON dba_tablespaces.TABLESPACE_NAME = dba_tables.TABLESPACE_NAME INNER JOIN user_tab_columns ON dba_tables.table_name = user_tab_columns.table_name WHERE dba_tablespaces.TABLESPACE_NAME = \'" + it.tablespace + "\'"</p>
                  </h4>
                </td>
              </tr>
              <tr>
                <td><h2>Usage of Conections	</h2></td>
                <td>
                  <h4>
                    <p> SELECT USERNAME, sum(VALUE/1024/1024) "Current memory" FROM V$SESSION sess, V$SESSTAT stat, V$STATNAME name WHERE stat.STATISTIC# = name.STATISTIC# AND name.NAME = 'session uga memory' AND TRIM(username) IS NOT NULL group by USERNAME; </p>
                    <p> memoriaTotal= select sum(bytes/2048)from v$sgastat; </p>
                  </h4>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </section>
  }
}

export default Health;
