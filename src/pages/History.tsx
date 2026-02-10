import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Building2, 
  Vote, 
  Users, 
  Award,
  MapPin,
  Calendar,
  BookOpen,
  Landmark,
  Globe
} from "lucide-react";

const History = () => {
  const personalInfo = {
    name: "Bhavin Maheshchandra Topiwala",
    dob: "27-09-1992",
    age: "34 Years",
    occupation: "Business",
    religion: "Hindu",
    caste: "Hindu Modh Vanik",
    subCaste: "Amdavadi Modh Ghanchi",
    category: "O.B.C",
    nativePlace: "Surat",
    lokSabha: "Surat Lok Sabha",
    vidhansabha: "Surat Paschim",
    ward: "10 (Adajan - Pal Ichchhapor - Bhatha)",
    address: "Surat",
    primaryMembership: "7000093131",
    activeMembership: "148044"
  };

  const education = [
    { degree: "L.L.B (Pursuing)", institution: "Baba Saheb Ambedkar Open University", year: "2025" },
    { degree: "Bachelor of Social Work (BSW)", institution: "Baba Saheb Ambedkar Open University", year: "2020 - 2024" },
    { degree: "Bachelor of Commerce (B.COM)", institution: "Veer Narmad Dakshin Gujarat University", year: "2010 - 2013" }
  ];

  const schooling = [
    "Saraswati Balmandir",
    "Dhoran 1 to 3 - School No. 64-65 Municipal Board Govt School",
    "Dhoran 4 to 7 - Shanti Niketan School, Sumul Dairy Road, Surat",
    "Dhoran 8 to 12 - I.C. Gandhi School, Sumul Dairy Road, Surat"
  ];

  const sanghParivar = [
    { org: "Rashtriya Swayamsevak Sangh (RSS)", detail: "2002 - Prathmik Vargh Shikshit" },
    { org: "ABVP", detail: "2010-2012 - College Campus Incharge" }
  ];

  const bjpResponsibilities = [
    { period: "2021-2025", role: "Yuva Morcha - Mahanagar Adhyaksh" },
    { period: "2016-2021", role: "Yuva Morcha - Mahanagar Mantri" },
    { period: "2012-2016", role: "Yuva Morcha - Mahanagar Karobari Sabhya" },
    { period: "2010-2012", role: "Yuva Morcha - Ward Karobari Sabhya" }
  ];

  const suratElections = [
    { year: "2010, 2015, 2021", event: "Surat Mahanagar Palika Sthanik Swaraj election" },
    { year: "2023", event: "Peta election - Ward No. 20" },
    { year: "2025", event: "Peta election - Ward No. 18" },
    { year: "2012, 2017, 2022", event: "Gujarat Vidhansabha election" },
    { year: "2014, 2019, 2024", event: "Lok Sabha election" }
  ];

  const gujaratByElections = [
    { year: "2021", area: "Morva-Hadaf Vidhansabha" },
    { year: "2022", area: "Dhari Vidhansabha" },
    { year: "2022", area: "Kaprada Vidhansabha" },
    { year: "2022", area: "Dang Vidhansabha" }
  ];

  const localElections = [
    { year: "2013", area: "Songadh Nagar Palika" },
    { year: "2015", area: "Dolvan Gram Panchayat (Tapi District)" },
    { year: "2015", area: "Surat Jilla Panchayat" },
    { year: "2015", area: "Kadodra Nagar Palika" },
    { year: "2015", area: "Bardoli Nagar Palika" },
    { year: "2015", area: "Kholwad Taluka Panchayat" },
    { year: "2016", area: "Kankpur Kansad Nagar Palika" },
    { year: "2017", area: "Mumbai Mahanagar Palika" },
    { year: "2020", area: "Tapi Jilla Panchayat" },
    { year: "2021", area: "Gandhinagar Mahanagar Palika" }
  ];

  const stateElections = [
    { year: "2017, 2022", area: "Uttar Pradesh Vidhansabha" },
    { year: "2018", area: "Karnataka Vidhansabha" },
    { year: "2018", area: "Rajasthan Vidhansabha" },
    { year: "2014, 2019, 2024", area: "Uttar Pradesh Lok Sabha" },
    { year: "2019, 2021", area: "Paschim Bengal Vidhansabha" },
    { year: "2019", area: "Maharashtra Vidhansabha" },
    { year: "2018, 2023", area: "Madhya Pradesh Vidhansabha" },
    { year: "2020", area: "Delhi Vidhansabha" },
    { year: "2021", area: "Dadra Nagar Haveli Lok Sabha Peta Election" },
    { year: "2022", area: "Punjab Vidhansabha" },
    { year: "2025", area: "Bihar Vidhansabha" }
  ];

  const universityElections = [
    { event: "SPB College election", year: "2011-2018", detail: "8 Continuous Years" },
    { event: "VNSGU - Senate & Syndicate election", year: "2010-2018", detail: "" }
  ];

  const socialOrganizations = [
    "Amdavadi Ghanchi Yuvak Mandal - Member",
    "Amdavadi Ghanchi Yuvak Mandal Kantruyumar Society - Member",
    "Surat Peoples Co-Operative Bank - Member",
    "Surat Ful Vikreta Association - Member",
    "APMC Sardar Market - Vepari Association - Member"
  ];

  const socialMedia = [
    { platform: "Facebook", followers: "11,966" },
    { platform: "Instagram", followers: "8,846" },
    { platform: "Twitter (X)", followers: "8,621" },
    { platform: "Narendra Modi App", followers: "10,000+" },
    { platform: "Threads", followers: "1,195" }
  ];

  const specialAchievement = "2023-2024: Worked as Page-Samiti member for 18 months at Hon. Prime Minister Shri Narendra Modi's Lok Sabha Constituency Varanasi, Uttar Pradesh";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-20">
        <div className="container-max section-padding text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Political Journey</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            A comprehensive history of dedication, service, and leadership in the Bharatiya Janata Party
          </p>
        </div>
      </section>

      <div className="container-max section-padding py-8 md:py-16 space-y-8 md:space-y-12">
        
        {/* Personal Information */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
              <Users className="w-6 h-6 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoItem label="Name" value={personalInfo.name} />
              <InfoItem label="Date of Birth" value={personalInfo.dob} />
              <InfoItem label="Age" value={personalInfo.age} />
              <InfoItem label="Occupation" value={personalInfo.occupation} />
              <InfoItem label="Religion" value={personalInfo.religion} />
              <InfoItem label="Caste" value={personalInfo.caste} />
              <InfoItem label="Sub Caste" value={personalInfo.subCaste} />
              <InfoItem label="Category" value={personalInfo.category} />
              <InfoItem label="Native Place" value={personalInfo.nativePlace} />
              <InfoItem label="Lok Sabha" value={personalInfo.lokSabha} />
              <InfoItem label="Vidhansabha" value={personalInfo.vidhansabha} />
              <InfoItem label="Ward No." value={personalInfo.ward} />
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 inline mr-2" />
                <strong>Address:</strong> {personalInfo.address}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
              <GraduationCap className="w-6 h-6 text-primary" />
              Educational Qualification
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 bg-muted/30 rounded-lg">
                  <Badge variant="secondary" className="w-fit">{edu.year}</Badge>
                  <div>
                    <p className="font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Schooling
              </h4>
              <ul className="space-y-2">
                {schooling.map((school, index) => (
                  <li key={index} className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/30">
                    {school}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Sangh Parivar */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
              <Award className="w-6 h-6 text-primary" />
              Sangh Parivar Association
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sanghParivar.map((item, index) => (
                <div key={index} className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="font-semibold text-foreground">{item.org}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* BJP Responsibilities */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
              <Landmark className="w-6 h-6 text-primary" />
              BJP Party Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
              <div className="space-y-4">
                {bjpResponsibilities.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 md:pl-10 relative">
                    <div className="hidden md:block absolute left-2 w-4 h-4 rounded-full bg-primary" />
                    <Badge className="hero-gradient text-white w-fit">{item.period}</Badge>
                    <p className="font-medium text-foreground">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Election Campaign Work */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
              <Vote className="w-6 h-6 text-primary" />
              Election Campaign Work
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            
            {/* Surat Elections */}
            <div>
              <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Surat Mahanagar Elections
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suratElections.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Badge variant="outline" className="shrink-0">{item.year}</Badge>
                    <p className="text-sm text-foreground">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gujarat By-Elections */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Gujarat Vidhansabha By-Elections</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {gujaratByElections.map((item, index) => (
                  <div key={index} className="p-3 bg-primary/5 rounded-lg text-center">
                    <Badge className="mb-2">{item.year}</Badge>
                    <p className="text-sm text-foreground">{item.area}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Body Elections */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Gram Panchayat, Taluka, Jilla & Nagar Palika Elections</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {localElections.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <Badge variant="secondary" className="text-xs">{item.year}</Badge>
                      <p className="text-sm text-foreground mt-1">{item.area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* State Elections */}
            <div>
              <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Vidhansabha & Lok Sabha Elections in Other States
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {stateElections.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <Badge variant="outline" className="shrink-0 text-xs">{item.year}</Badge>
                    <p className="text-sm text-foreground">{item.area}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Achievement */}
            <div className="p-4 md:p-6 hero-gradient rounded-lg text-white">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Special Achievement</h4>
                  <p className="text-sm opacity-90">{specialAchievement}</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* University Elections */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
              <GraduationCap className="w-6 h-6 text-primary" />
              University & College Elections
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {universityElections.map((item, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold text-foreground">{item.event}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">{item.year}</Badge>
                    {item.detail && <span className="text-sm text-muted-foreground">{item.detail}</span>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Organizations */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
              <Users className="w-6 h-6 text-primary" />
              Social & Business Organizations
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {socialOrganizations.map((org, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-foreground">{org}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
              <Globe className="w-6 h-6 text-primary" />
              Social Media Presence
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socialMedia.map((item, index) => (
                <div key={index} className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{item.followers}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.platform}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>

      <Footer />
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="p-3 bg-muted/30 rounded-lg">
    <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
    <p className="text-sm font-medium text-foreground mt-1">{value}</p>
  </div>
);

export default History;
