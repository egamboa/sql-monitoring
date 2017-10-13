import React, { Component } from 'react';
import { Row, Col, Button, Well } from 'react-bootstrap';
import General from './General';
import LogGroup from './LogGroup';

class Logs extends Component {
  sampleData = {
    groups: [
      { title: 'Group 1',
        logs: [
          { title: 'Log1a', switch: 4, status: 'success', dest: '../hsjd/log/redo1a.log' },
          { title: 'Log1b', switch: 4, status: 'success', dest: '../hsjd/log/redo1b.log' }
        ]
      },
      { title: 'Group 2',
        logs: [
          { title: 'Log2a', switch: 4, status: 'warning', dest: '../hsjd/log/redo2a.log' },
          { title: 'Log2b', switch: 4, status: 'warning', dest: '../hsjd/log/redo2b.log' }
        ]
      },
      { title: 'Group 3',
      logs: [
        { title: 'Log3a', switch: 4, status: 'danger', dest: '../hsjd/log/redo3a.log' },
        { title: 'Log3b', switch: 4, status: 'danger', dest: '../hsjd/log/redo3b.log' }
      ]
    }
    ],
    archiveMode: 'Off',
    auditTrailMode: 'DB',
    avg: 4,
    prev: 181,
    actual: 182,
    next: 183
  }

  render() {
    let groups = this.sampleData.groups.map((group, index) => {
      return <LogGroup key={index} group={group} />
    });

    return <section>
      <Row>
        <Col xs={12}>
          <h1><strong>Logs Monitoring</strong></h1>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <General 
            archiveMode={this.sampleData.archiveMode}
            avg={this.sampleData.avg} 
            prev={this.sampleData.prev} 
            actual={this.sampleData.actual}
            next={this.sampleData.next}
            auditTrailMode={this.sampleData.auditTrailMode} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>Logs Status</h3>
          <br />
          {groups}
        </Col>
      </Row>
      <Row> <br /><hr /><br /> </Row>
      <Row>
        <Col xs={12}>
          <h2>Actions</h2>
          <Well>
            <strong>ALTER SYSTEM SWITCH LOGFILE;</strong> <Button bsStyle="primary">Switch Logfile</Button>
          </Well>
        </Col>
      </Row>
      <Row> <br /><hr /><br /> </Row>
    </section>
  }
}

export default Logs;
