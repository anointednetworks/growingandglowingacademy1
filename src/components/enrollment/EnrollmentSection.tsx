import React, { useState } from "react";
import { FileText, Download, Eye, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EnrollmentSectionProps {
  title?: string;
  description?: string;
  applicationUrl?: string;
}

const EnrollmentSection = ({
  title = "Enrollment Application",
  description = "Start your child's journey with us by completing our enrollment application. You can preview the form, download it as a PDF, or fill it out online.",
  applicationUrl = "/enrollment-application.pdf",
}: EnrollmentSectionProps) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real implementation, this would submit the form data to a server
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="info">Information</TabsTrigger>
              <TabsTrigger value="download">Download PDF</TabsTrigger>
              <TabsTrigger value="online">Apply Online</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Process</CardTitle>
                  <CardDescription>
                    Learn about our enrollment process and what to expect.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium">
                        Required Documents
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Child's birth certificate</li>
                        <li>Immunization records</li>
                        <li>Parent/guardian ID</li>
                        <li>Emergency contact information</li>
                        <li>Medical information and allergies</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium">Enrollment Steps</h3>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                        <li>Complete and submit application</li>
                        <li>Schedule a tour of our facility</li>
                        <li>Interview with our director</li>
                        <li>Receive acceptance notification</li>
                        <li>Complete enrollment and payment</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
                    <DialogTrigger asChild>
                      <Button className="mr-4" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview Form
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>
                          Enrollment Application Preview
                        </DialogTitle>
                        <DialogDescription>
                          This is a preview of our enrollment application form.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 border rounded-md p-6 bg-gray-50">
                        <h3 className="text-xl font-bold mb-4 text-center">
                          Grow Glow Academy Enrollment Application
                        </h3>
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h4 className="font-medium">Child Information</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-500">
                                  First Name:
                                </p>
                                <div className="h-8 border-b border-dashed"></div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Last Name:
                                </p>
                                <div className="h-8 border-b border-dashed"></div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Date of Birth:
                                </p>
                                <div className="h-8 border-b border-dashed"></div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Gender:</p>
                                <div className="h-8 border-b border-dashed"></div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium">
                              Parent/Guardian Information
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-500">
                                  Parent Name:
                                </p>
                                <div className="h-8 border-b border-dashed"></div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Relationship:
                                </p>
                                <div className="h-8 border-b border-dashed"></div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Phone Number:
                                </p>
                                <div className="h-8 border-b border-dashed"></div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Email:</p>
                                <div className="h-8 border-b border-dashed"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="default">
                    <FileText className="mr-2 h-4 w-4" />
                    Schedule a Tour
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="download" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Download Application Form</CardTitle>
                  <CardDescription>
                    Download our application form to fill out at your
                    convenience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 border rounded-md bg-gray-50 text-center">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">
                      Enrollment Application Form
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Download our application form in PDF format. Print it,
                      fill it out, and bring it to our center or email it to us.
                    </p>
                    <Button variant="default" size="lg" asChild>
                      <a href={applicationUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-gray-500">
                    File format: PDF (1.2MB)
                  </p>
                  <p className="text-sm text-gray-500">
                    Last updated: June 2023
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="online" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Online Application Form</CardTitle>
                  <CardDescription>
                    Complete your application online and submit it directly to
                    us.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="p-6 border rounded-md bg-green-50 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-green-800 mb-2">
                        Application Submitted Successfully!
                      </h3>
                      <p className="text-green-700 mb-4">
                        Thank you for submitting your enrollment application.
                        Our team will review your information and contact you
                        within 2-3 business days.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Submit Another Application
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                          Child Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="childFirstName">First Name</Label>
                            <Input
                              id="childFirstName"
                              placeholder="Enter first name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="childLastName">Last Name</Label>
                            <Input
                              id="childLastName"
                              placeholder="Enter last name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="childDob">Date of Birth</Label>
                            <Input id="childDob" type="date" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="childGender">Gender</Label>
                            <select
                              id="childGender"
                              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                              required
                            >
                              <option value="">Select gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                          Parent/Guardian Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="parentName">Full Name</Label>
                            <Input
                              id="parentName"
                              placeholder="Enter full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="relationship">
                              Relationship to Child
                            </Label>
                            <Input
                              id="relationship"
                              placeholder="e.g. Mother, Father, Guardian"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parentEmail">Email Address</Label>
                            <Input
                              id="parentEmail"
                              type="email"
                              placeholder="Enter email address"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parentPhone">Phone Number</Label>
                            <Input
                              id="parentPhone"
                              type="tel"
                              placeholder="Enter phone number"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                          Program Selection
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="program">Desired Program</Label>
                            <select
                              id="program"
                              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                              required
                            >
                              <option value="">Select program</option>
                              <option value="infant">
                                Infant Care (6 weeks - 12 months)
                              </option>
                              <option value="toddler">
                                Toddler Program (1-2 years)
                              </option>
                              <option value="preschool">
                                Preschool (3-4 years)
                              </option>
                              <option value="prek">
                                Pre-Kindergarten (4-5 years)
                              </option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="startDate">
                              Desired Start Date
                            </Label>
                            <Input id="startDate" type="date" required />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="comments">
                          Additional Comments or Questions
                        </Label>
                        <textarea
                          id="comments"
                          className="flex min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Please share any additional information or questions you may have"
                        ></textarea>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="terms"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          required
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the terms and conditions and privacy policy
                        </Label>
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Application
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
