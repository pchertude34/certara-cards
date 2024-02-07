import { ActionCard } from './components/ActionCard/ActionCard';
import CheckIcon from './components/icons/CheckIcon';
import FileIcon from './components/icons/FileIcon';
import CopyIcon from './components/icons/CopyIcon';
import { Divider } from './components/library/Divider/Divider';

function App() {
  return (
    <div className="container">
      <h1 className="heading--lg text-center">Add a New Object</h1>
      <p className="text text-center mb-3">
        Choose an option below. You can always change your mind or make edits later.
      </p>
      <div className="grid">
        <ActionCard
          tag="Time-saver"
          title="From Scanned Data"
          icon={<CheckIcon />}
          actionButtons={<button className="btn btn-primary">Scan data</button>}
        >
          <p className="text">
            Lorem ipsum dolor sit amet euismod porta odio in, <b>consectetur adipiscing elit</b>.
            Nulla convallis tortor dolor, quis luctus lacus varius eget ultrices finibus elit at
            congue.
          </p>
        </ActionCard>
        <ActionCard
          title="Import File"
          icon={<FileIcon />}
          actionButtons={
            <>
              <button className="btn btn-primary mr-2">Import XLSX</button>
              <button className="btn btn-primary">Import XLM</button>
            </>
          }
        >
          <p className="text">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin magna libero,
            commodo ac vulputate vitae.
          </p>
        </ActionCard>
        <ActionCard
          title="Copy From"
          icon={<CopyIcon />}
          actionButtons={
            <>
              <button className="btn btn-primary mr-2">Copy Object</button>
              <button className="btn btn-primary">Copy Other Object</button>
            </>
          }
        >
          <p className="text">
            Maecenas luctus ex nunc, semper feugiat odio convallis a. Phasellus lorem ipsum,
            faucibus id arcu molestie.
          </p>
        </ActionCard>
      </div>
      <Divider />
      <p className="text text-center">
        or,{' '}
        <a className="link" href="#">
          start with a blank template
        </a>
      </p>
    </div>
  );
}

export default App;
