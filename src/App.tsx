import { Card } from './components/Card/Card';
import { CardHeader } from './components/Card/CardHeader';
import { CardBody } from './components/Card/CardBody';
import CheckIcon from './assets/check-light.svg?react';
import CopyIcon from './assets/copy-light.svg?react';
import ImportIcon from './assets/file-import-light.svg?react';

import './scss/main.scss';

function App() {
  return (
    <div className="container">
      <h1 className="heading text-center">Add a New Object</h1>
      <p className="text text-center mb-3">
        Choose an option below. You can always change your mind or make edits later.
      </p>
      <div className="grid">
        <Card tag="Time-saver">
          <CardHeader title="From Scanned Data" icon={<CheckIcon />} />
          <CardBody>
            <p className="card__text-body mb-3">
              Lorem ipsum dolor sit amet euismod porta odio in, <b>consectetur adipiscing elit</b>.
              Nulla convallis tortor dolor, quis luctus lacus varius eget ultrices finibus elit at
              congue.
            </p>
            <div className="button-group mt-auto">
              <button className="btn btn-primary">Scan data</button>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Import File" icon={<ImportIcon />} />
          <CardBody>
            <p className="card__text-body mb-3">
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin magna libero,
              commodo ac vulputate vitae.
            </p>
            <div className="button-group mt-auto">
              <button className="btn btn-primary mr-2">Import XLSX</button>
              <button className="btn btn-primary">Import XLM</button>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Copy From" icon={<CopyIcon />} />
          <CardBody>
            <p className="card__text-body mb-3">
              Maecenas luctus ex nunc, semper feugiat odio convallis a. Phasellus lorem ipsum,
              faucibus id arcu molestie.
            </p>
            <div className="button-group mt-auto">
              <button className="btn btn-primary mr-2">Copy Object</button>
              <button className="btn btn-primary">Copy Other Object</button>
            </div>
          </CardBody>
        </Card>
      </div>
      <hr className="divider" />
      <p className="text text-center">
        or, <a className="link">start with a blank template</a>
      </p>
    </div>
  );
}

export default App;
