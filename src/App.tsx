import Sidebar from './components/Sidebar';
import SettingsHeader from './components/SettingsHeader';
import SettingsForm from './components/SettingsForm';

const App = () => (
  <div className="min-h-screen bg-white flex">
    <Sidebar />
    <main className="flex-1 flex flex-col">
      <SettingsHeader />
      <section className="flex-1 px-2 md:px-8 py-4">
        <SettingsForm />
      </section>
    </main>
  </div>
);

export default App;
