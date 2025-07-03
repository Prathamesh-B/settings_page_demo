
import React, { useRef, useState } from 'react';

const SettingsForm = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>('');
  const fileInput = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
      setPhotoName(e.target.files[0].name);
    }
  };

  return (
    <form className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 mt-8 mb-12 text-[15px]">
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Personal info</h2>
        <p className="text-sm text-gray-500 mb-6">Update your photo and personal details here.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-green-600">*</span></label>
            <div className="flex gap-2">
              <input type="text" placeholder="First name" className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" defaultValue="Clara" />
              <input type="text" placeholder="Last name" className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" defaultValue="Smith" />
            </div>
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address <span className="text-green-600">*</span></label>
            <div className="flex gap-2">
              <input type="email" className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" defaultValue="clara@bizclues.com" />
              <button type="button" className="px-4 py-2 rounded bg-green-600 text-white font-medium hover:bg-green-700">Verify</button>
            </div>
          </div>
          {/* Photo upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your photo <span className="text-xs text-gray-400">(This will be displayed on your profile.)</span></label>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                {photo ? <img src={photo} alt="Profile" className="object-cover h-full w-full" /> : <span className="text-gray-400 text-xl">+</span>}
              </div>
              <div>
                <input ref={fileInput} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                <button type="button" onClick={() => fileInput.current?.click()} className="border border-dashed border-gray-300 rounded px-4 py-2 text-gray-600 hover:bg-gray-50">Click to upload or drag and drop<br /><span className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</span></button>
                {photoName && <div className="text-xs text-gray-500 mt-1">{photoName}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Change Password */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" defaultValue="********" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" placeholder="Must be at least 8 characters" />
            <div className="flex flex-col gap-1 mt-1 text-xs text-gray-500">
              <span>Must be at least 8 characters</span>
              <span>Must contain one special character</span>
            </div>
          </div>
        </div>
        <button type="button" className="mt-4 px-6 py-2 rounded bg-green-600 text-white font-medium hover:bg-green-700">Reset password</button>
      </section>
      {/* Role, Country, Mobile, Timezone, Bio */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-500" value="Admin" disabled />
            <p className="text-xs text-gray-500 mt-1">Please note the role can be changed through <span className="font-semibold">Settings &gt; Team &gt; Edit Roles</span>, <a href="#" className="text-green-600 underline">click here</a> to change the role.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-green-600">*</span></label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200">
              <option>Australia</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>India</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number <span className="text-green-600">*</span></label>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-green-200">
                <option>US</option>
                <option>AU</option>
                <option>UK</option>
              </select>
              <input type="tel" className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 000-0000" />
              <button type="button" className="px-4 py-2 rounded bg-green-600 text-white font-medium hover:bg-green-700">Verify</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200">
              <option>Pacific Standard Time (PST) UTC-08:00</option>
              <option>Eastern Standard Time (EST) UTC-05:00</option>
              <option>Central European Time (CET) UTC+01:00</option>
            </select>
          </div>
        </div>
      </section>
      {/* Bio */}
      <section className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio <span className="text-green-600">*</span></label>
        <div className="flex flex-col gap-2">
          <select className="w-32 border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-green-200">
            <option>Regular</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" rows={3} defaultValue={"I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."} maxLength={300} />
          <div className="text-xs text-gray-400 text-right">275 characters left</div>
        </div>
      </section>
      {/* Save/Cancel Buttons for mobile */}
      <div className="flex md:hidden gap-2 mt-4">
        <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-50">Cancel</button>
        <button className="px-4 py-2 rounded bg-green-600 text-white font-medium hover:bg-green-700">Save</button>
      </div>
    </form>
  );
};

export default SettingsForm;
