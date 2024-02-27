import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinTeam() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    place: '',
    githubLink: '',
    skills: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: e.target.value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/joinTeam', formData,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        
      });
      console.log('Join team created successfully', response.data);  
      navigate('/invites');
    } catch (error) {
      alert('Failed!')
      console.error('Failed', error);
    }
  }

  const handleSendEmail = (email: string) => {
    window.location.href = `mailto:${email}?subject=Your%20Subject&body=Your%20email%20template%20goes%20here`;
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Team</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Fill the details below.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
          <div className="flex items-center justify-between">
              <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
            </div>
            <div className="mt-2.5">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="given-name"
                value={formData.username}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
          <div className="flex items-center justify-between">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
            </div>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <div className="flex items-center justify-between">
              <label htmlFor="githubLink" className="block text-sm font-semibold leading-6 text-gray-900">
                Github Link
              </label>
            </div>
            <div className="mt-2.5">
              <input
                type="url"
                name="githubLink"
                id="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <div className="flex items-center justify-between">
              <label htmlFor="skill" className="block text-sm font-semibold leading-6 text-gray-900">
                Skills
              </label>
            </div>
            <div className="mt-2.5">
              <input
                type="text"
                name="skills"
                id="skills"
                autoComplete="skills"
                value={formData.skills}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex items-center justify-between">
              <label htmlFor="place" className="block text-sm font-semibold leading-6 text-gray-900">
                Place
              </label>
            </div>
            <div className="mt-2.5">
              <input
                name="place"
                id="place"
                type="text"
                value={formData.place}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <div className="flex items-center justify-between">
              <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
              Description
              </label>
            </div>
            <div className="mt-2.5">
              <textarea
                name="description"
                id="message"
                rows={4}
                value={formData.description}
                onChange={handleChangeDesc}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}