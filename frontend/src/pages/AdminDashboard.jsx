import React, { useState, useEffect, useRef } from 'react';
import { Lock, MapPin, Image as ImageIcon, Plus, Trash2, LogOut, Upload } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "12345678") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <Lock size={32} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <CMSInterface onLogout={() => { setIsAuthenticated(false); setPassword(""); }} password={password} />;
}

function CMSInterface({ onLogout, password }) {
  const [activeTab, setActiveTab] = useState("locations");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-900 text-white flex flex-col md:min-h-screen">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white tracking-tight">Smart Chitti CMS</h1>
          <p className="text-sm text-gray-400 mt-1">Content Manager</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab("locations")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              activeTab === "locations" ? "bg-red-600 text-white" : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <MapPin size={20} />
            <span className="font-medium">Locations</span>
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              activeTab === "gallery" ? "bg-red-600 text-white" : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <ImageIcon size={20} />
            <span className="font-medium">Gallery</span>
          </button>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          {activeTab === "locations" && <LocationsManager password={password} />}
          {activeTab === "gallery" && <GalleryManager password={password} />}
        </div>
      </div>
    </div>
  );
}

// --- Managers ---

function LocationsManager({ password }) {
  const [branches, setBranches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form State
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("info@srinidhichits.com");
  const [coordX, setCoordX] = useState("0.5");
  const [coordY, setCoordY] = useState("0.5");
  const [headOffice, setHeadOffice] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const fetchBranches = async () => {
    try {
      const res = await fetch("/api/cms/branches");
      const data = await res.json();
      setBranches(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("coordX", coordX);
    formData.append("coordY", coordY);
    formData.append("headOffice", headOffice);
    formData.append("image", imageFile);

    try {
      const res = await fetch("/api/cms/branches", {
        method: "POST",
        headers: { "x-admin-password": password },
        body: formData
      });
      if (res.ok) {
        setIsAdding(false);
        fetchBranches();
        // Reset form
        setName(""); setAddress(""); setPhone(""); setCoordX("0.5"); setCoordY("0.5"); setImageFile(null); setHeadOffice(false);
      } else {
        alert("Failed to add branch");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this location?")) return;
    try {
      const res = await fetch(`/api/cms/branches/${id}`, {
        method: "DELETE",
        headers: { "x-admin-password": password }
      });
      if (res.ok) {
        fetchBranches();
      } else {
        alert("Failed to delete branch");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Locations</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-red-700 transition"
        >
          {isAdding ? "Cancel" : <><Plus size={18} /> Add Location</>}
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
          <h3 className="text-lg font-bold mb-4">Add New Location</h3>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Branch Name</label>
                <input required type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border rounded-lg p-2" placeholder="e.g. KARIMNAGAR" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input required type="text" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border rounded-lg p-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea required value={address} onChange={e => setAddress(e.target.value)} className="w-full border rounded-lg p-2 h-20" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Map X Coordinate (0.0 to 1.0)</label>
                <input required type="number" step="0.01" value={coordX} onChange={e => setCoordX(e.target.value)} className="w-full border rounded-lg p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Map Y Coordinate (0.0 to 1.0)</label>
                <input required type="number" step="0.01" value={coordY} onChange={e => setCoordY(e.target.value)} className="w-full border rounded-lg p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Branch Image</label>
                <input required type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="w-full border rounded-lg p-1.5" />
              </div>
              <div className="flex items-center gap-2 mt-6">
                <input type="checkbox" id="headOffice" checked={headOffice} onChange={e => setHeadOffice(e.target.checked)} className="w-5 h-5 text-red-600 rounded" />
                <label htmlFor="headOffice" className="text-sm font-medium">Is Head Office?</label>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800">Save Location</button>
            </div>
          </form>
        </div>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Branch Name</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {branches.map(b => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {b.imageUrl && <img src={b.imageUrl} alt={b.name} className="w-12 h-12 rounded object-cover" />}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {b.name} {b.headOffice && <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">HQ</span>}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{b.phone}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleDelete(b.id)} className="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded-lg">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {branches.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-gray-500">No locations found. Add one above.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function GalleryManager({ password }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/cms/gallery");
      const data = await res.json();
      setImages(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/cms/gallery", {
        method: "POST",
        headers: { "x-admin-password": password },
        body: formData
      });
      if (res.ok) {
        fetchImages();
      } else {
        alert("Failed to upload image");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this gallery image?")) return;
    try {
      const res = await fetch(`/api/cms/gallery/${id}`, {
        method: "DELETE",
        headers: { "x-admin-password": password }
      });
      if (res.ok) {
        fetchImages();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Gallery</h2>
        <div>
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" ref={fileInputRef} />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-red-700 transition disabled:opacity-50"
          >
            <Upload size={18} /> {isUploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map(img => (
            <div key={img.id} className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-200 aspect-square bg-white">
              <img src={img.imageUrl} alt="Gallery" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => handleDelete(img.id)}
                  className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 hover:scale-110 transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          {images.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-200 border-dashed">
              No gallery images found. Upload your first memory above.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
