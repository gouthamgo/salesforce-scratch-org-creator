import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

const ScratchOrgBuilder = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [orgDefinition, setOrgDefinition] = useState({
    orgName: "MyScratchOrg",
    edition: "Developer",
    features: ["API", "AuthorApex"],
    settings: {
      lightningExperienceSettings: {
        enableS1DesktopEnabled: true
      }
    },
    apiVersion: "58.0"
  });
  
  const [selectedMetadataTypes, setSelectedMetadataTypes] = useState([
    { name: "ActionLinkGroupTemplate", selected: false, members: [] },
    { name: "AnalyticSnapshot", selected: false, members: [] },
    { name: "ApexClass", selected: true, members: ["*"] },
    { name: "ApexComponent", selected: false, members: [] },
    { name: "ApexPage", selected: false, members: [] },
    { name: "ApexTestSuite", selected: false, members: [] },
    { name: "ApexTrigger", selected: true, members: ["*"] },
    { name: "AppMenu", selected: false, members: [] },
    { name: "ApprovalProcess", selected: false, members: [] },
    { name: "AssignmentRules", selected: false, members: [] },
    { name: "AuraDefinitionBundle", selected: false, members: [] },
    { name: "AuthProvider", selected: false, members: [] },
    { name: "AutoResponseRules", selected: false, members: [] },
    { name: "BrandingSet", selected: false, members: [] },
    { name: "CallCenter", selected: false, members: [] },
    { name: "Certificate", selected: false, members: [] },
    { name: "CleanDataService", selected: false, members: [] },
    { name: "Community", selected: false, members: [] },
    { name: "CommunityTemplateDefinition", selected: false, members: [] },
    { name: "CommunityThemeDefinition", selected: false, members: [] },
    { name: "ConnectedApp", selected: false, members: [] },
    { name: "ContentAsset", selected: false, members: [] },
    { name: "CorsWhitelistOrigin", selected: false, members: [] },
    { name: "CustomApplication", selected: false, members: [] },
    { name: "CustomApplicationComponent", selected: false, members: [] },
    { name: "CustomField", selected: false, members: [] },
    { name: "CustomLabel", selected: false, members: [] },
    { name: "CustomLabels", selected: false, members: [] },
    { name: "CustomMetadata", selected: false, members: [] },
    { name: "CustomObject", selected: true, members: ["*"] },
    { name: "CustomObjectTranslation", selected: false, members: [] },
    { name: "CustomPageWebLink", selected: false, members: [] },
    { name: "CustomPermission", selected: false, members: [] },
    { name: "CustomSite", selected: false, members: [] },
    { name: "CustomTab", selected: false, members: [] },
    { name: "Dashboard", selected: false, members: [] },
    { name: "DataCategoryGroup", selected: false, members: [] },
    { name: "DelegateGroup", selected: false, members: [] },
    { name: "Document", selected: false, members: [] },
    { name: "DuplicateRule", selected: false, members: [] },
    { name: "EclairGeoData", selected: false, members: [] },
    { name: "EmailTemplate", selected: false, members: [] },
    { name: "EscalationRules", selected: false, members: [] },
    { name: "ExternalDataSource", selected: false, members: [] },
    { name: "ExternalServiceRegistration", selected: false, members: [] },
    { name: "FlexiPage", selected: false, members: [] },
    { name: "Flow", selected: false, members: [] },
    { name: "FlowDefinition", selected: false, members: [] },
    { name: "GlobalValueSet", selected: false, members: [] },
    { name: "GlobalValueSetTranslation", selected: false, members: [] },
    { name: "Group", selected: false, members: [] },
    { name: "HomePageComponent", selected: false, members: [] },
    { name: "HomePageLayout", selected: false, members: [] },
    { name: "Layout", selected: false, members: [] },
    { name: "LightningBolt", selected: false, members: [] },
    { name: "LightningComponentBundle", selected: false, members: [] },
    { name: "LightningExperienceTheme", selected: false, members: [] },
    { name: "ListView", selected: false, members: [] },
    { name: "MatchingRule", selected: false, members: [] },
    { name: "NamedCredential", selected: false, members: [] },
    { name: "Network", selected: false, members: [] },
    { name: "NetworkBranding", selected: false, members: [] },
    { name: "PathAssistant", selected: false, members: [] },
    { name: "PermissionSet", selected: false, members: [] },
    { name: "Profile", selected: false, members: [] },
    { name: "Queue", selected: false, members: [] },
    { name: "QuickAction", selected: false, members: [] },
    { name: "RecordType", selected: false, members: [] },
    { name: "RemoteSiteSetting", selected: false, members: [] },
    { name: "Report", selected: false, members: [] },
    { name: "ReportType", selected: false, members: [] },
    { name: "Role", selected: false, members: [] },
    { name: "SamlSsoConfig", selected: false, members: [] },
    { name: "Scontrol", selected: false, members: [] },
    { name: "Settings", selected: false, members: [] },
    { name: "SharingRules", selected: false, members: [] },
    { name: "SharingSet", selected: false, members: [] },
    { name: "SiteDotCom", selected: false, members: [] },
    { name: "StandardValueSet", selected: false, members: [] },
    { name: "StandardValueSetTranslation", selected: false, members: [] },
    { name: "StaticResource", selected: false, members: [] },
    { name: "SynonymDictionary", selected: false, members: [] },
    { name: "Territory", selected: false, members: [] },
    { name: "Territory2", selected: false, members: [] },
    { name: "Territory2Model", selected: false, members: [] },
    { name: "Territory2Rule", selected: false, members: [] },
    { name: "Territory2Type", selected: false, members: [] },
    { name: "TopicsForObjects", selected: false, members: [] },
    { name: "TransactionSecurityPolicy", selected: false, members: [] },
    { name: "Translations", selected: false, members: [] },
    { name: "WaveApplication", selected: false, members: [] },
    { name: "WaveDashboard", selected: false, members: [] },
    { name: "WaveDataflow", selected: false, members: [] },
    { name: "WaveDataset", selected: false, members: [] },
    { name: "WaveLens", selected: false, members: [] },
    { name: "WaveTemplateBundle", selected: false, members: [] },
    { name: "Workflow", selected: false, members: [] },
    { name: "WorkflowAlert", selected: false, members: [] },
    { name: "WorkflowFieldUpdate", selected: false, members: [] },
    { name: "WorkflowFlowAction", selected: false, members: [] },
    { name: "WorkflowOutboundMessage", selected: false, members: [] },
    { name: "WorkflowRule", selected: false, members: [] },
    { name: "WorkflowTask", selected: false, members: [] }
  ]);
  
  const [workflowSteps, setWorkflowSteps] = useState([
    { 
      title: "Create SFDX Project", 
      command: "sfdx force:project:create -n MySFDXProject", 
      description: "Creates a new Salesforce DX project directory structure"
    },
    { 
      title: "Change to Project Directory", 
      command: "cd MySFDXProject", 
      description: "Navigate to the project directory"
    },
    { 
      title: "Create Scratch Org Definition File", 
      command: "mkdir -p config && echo '[PROJECT-SCRATCH-DEF-JSON]' > config/project-scratch-def.json", 
      description: "Creates the scratch org definition file with your configuration"
    },
    { 
      title: "Create Package.xml File", 
      command: "mkdir -p manifest && echo '[PACKAGE-XML]' > manifest/package.xml", 
      description: "Creates the package.xml file for metadata retrieval"
    },
    { 
      title: "Authenticate to Dev Hub", 
      command: "sfdx force:auth:web:login -d -a DevHub", 
      description: "Log in to your Dev Hub org (if not already authenticated)"
    },
    { 
      title: "Create Scratch Org", 
      command: "sfdx force:org:create -f config/project-scratch-def.json -a MyScratchOrg -v DevHub", 
      description: "Creates a new scratch org using your definition file"
    },
    { 
      title: "Authenticate to Production/Source Org", 
      command: "sfdx force:auth:web:login -a SourceOrg", 
      description: "Log in to your production or source org to retrieve metadata"
    },
    { 
      title: "Retrieve Metadata", 
      command: "sfdx force:source:retrieve -x manifest/package.xml -u SourceOrg", 
      description: "Retrieves metadata from source org based on package.xml"
    },
    { 
      title: "Deploy to Scratch Org", 
      command: "sfdx force:source:push -u MyScratchOrg", 
      description: "Deploys the retrieved metadata to your scratch org"
    },
    { 
      title: "Open Scratch Org", 
      command: "sfdx force:org:open -u MyScratchOrg", 
      description: "Opens the scratch org in your browser"
    }
  ]);
  
  const editions = ["Developer", "Enterprise", "Group", "Professional", "Partner Developer", "Partner Enterprise", "Partner Group", "Partner Professional"];
  
  const availableFeatures = [
    "API", "AuthorApex", "B2BCommerce", "CMSUnlimited", "Communities", "ContactsToMultipleAccounts", 
    "DebugApex", "DevelopmentWave", "DigitalExperience", "Experiences", "ExperienceBundle", "ExperienceCloud",
    "FieldService", "ForceComPlatform", "HealthCloud", "Industries", "Knowledge", "LightningExperience", 
    "LiveAgent", "MarketingUser", "Multifolio", "MultiCurrency", "Objects", "OrderManagement",
    "Pardot", "PardotAppV2", "PersonAccounts", "ProcessBuilder", "RecordTypes", "RetailExecution",
    "SalesWave", "Salesforce2Salesforce", "SalesforceContent", "SalesforceContentUser", "SalesforceCRM", "SalesforceInbox",
    "ServiceCloud", "ServiceUser", "ServiceWave", "Sites", "StateAndCountryPicklist", "Survey", 
    "Transitions", "Wave", "WorkDotComUserPerm", "WaveTabular"
  ];
  
  const handleFeatureToggle = (feature) => {
    const features = [...orgDefinition.features];
    if (features.includes(feature)) {
      const index = features.indexOf(feature);
      features.splice(index, 1);
    } else {
      features.push(feature);
    }
    setOrgDefinition({
      ...orgDefinition,
      features
    });
  };
  
  const handleSelectAllFeatures = () => {
    setOrgDefinition({
      ...orgDefinition,
      features: [...availableFeatures]
    });
  };
  
  const handleClearAllFeatures = () => {
    setOrgDefinition({
      ...orgDefinition,
      features: []
    });
  };
  
  const handleMetadataTypeToggle = (index) => {
    const updatedTypes = [...selectedMetadataTypes];
    updatedTypes[index].selected = !updatedTypes[index].selected;
    setSelectedMetadataTypes(updatedTypes);
  };
  
  const handleSelectAllMetadata = () => {
    const updatedTypes = selectedMetadataTypes.map(type => ({
      ...type,
      selected: true,
      members: type.members.length ? type.members : ["*"]
    }));
    setSelectedMetadataTypes(updatedTypes);
  };
  
  const handleClearAllMetadata = () => {
    const updatedTypes = selectedMetadataTypes.map(type => ({
      ...type,
      selected: false
    }));
    setSelectedMetadataTypes(updatedTypes);
  };
  
  const handleSelectCommonMetadata = () => {
    const commonTypes = ["ApexClass", "ApexTrigger", "CustomObject", "CustomField", 
                       "Layout", "Profile", "PermissionSet", "CustomTab", "GlobalValueSet",
                       "LightningComponentBundle", "AuraDefinitionBundle", "StaticResource", 
                       "CustomLabel", "Report", "Dashboard"];
    
    const updatedTypes = selectedMetadataTypes.map(type => ({
      ...type,
      selected: commonTypes.includes(type.name),
      members: commonTypes.includes(type.name) && !type.members.length ? ["*"] : type.members
    }));
    setSelectedMetadataTypes(updatedTypes);
  };
  
  const generateJSON = () => {
    return JSON.stringify(orgDefinition, null, 2);
  };
  
  const generatePackageXML = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<Package xmlns="http://soap.sforce.com/2006/04/metadata">\n';
    
    selectedMetadataTypes.forEach(type => {
      if (type.selected) {
        xml += '  <types>\n';
        type.members.forEach(member => {
          xml += '    <members>' + member + '</members>\n';
        });
        xml += '    <name>' + type.name + '</name>\n';
        xml += '  </types>\n';
      }
    });
    
    xml += '  <version>' + orgDefinition.apiVersion + '</version>\n';
    xml += '</Package>';
    
    return xml;
  };
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Would show a toast in a real app
  };
  
  const copyFormattedCommands = () => {
    const formattedText = workflowSteps
      .map((step, index) => `${index + 1}. ${step.title}\n$ ${step.command}`)
      .join('\n\n');
    copyToClipboard(formattedText);
  };
  
  const displayCommand = (command) => {
    // Replace placeholders with actual generated content
    let displayCmd = command;
    if (command.includes('[PROJECT-SCRATCH-DEF-JSON]')) {
      displayCmd = command.replace('[PROJECT-SCRATCH-DEF-JSON]', generateJSON());
    } else if (command.includes('[PACKAGE-XML]')) {
      displayCmd = command.replace('[PACKAGE-XML]', generatePackageXML());
    }
    return displayCmd;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Salesforce Scratch Org Builder</h1>
      
      <div>
        <div className="flex border-b mb-4">
          <button 
            className={`py-2 px-4 font-medium cursor-pointer ${activeTab === 0 ? 'border-b-2 border-blue-500 text-blue-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab(0)}
          >
            Step 1: Scratch Org Definition
          </button>
          <button 
            className={`py-2 px-4 font-medium cursor-pointer ${activeTab === 1 ? 'border-b-2 border-blue-500 text-blue-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab(1)}
          >
            Step 2: Metadata Selection
          </button>
          <button 
            className={`py-2 px-4 font-medium cursor-pointer ${activeTab === 2 ? 'border-b-2 border-blue-500 text-blue-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab(2)}
          >
            Step 3: Command Reference
          </button>
        </div>
        
        {activeTab === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Org Configuration</h2>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Org Name</label>
                <input 
                  type="text" 
                  value={orgDefinition.orgName}
                  onChange={(e) => setOrgDefinition({...orgDefinition, orgName: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Edition</label>
                <select 
                  value={orgDefinition.edition}
                  onChange={(e) => setOrgDefinition({...orgDefinition, edition: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  {editions.map(edition => (
                    <option key={edition} value={edition}>{edition}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">API Version</label>
                <select 
                  value={orgDefinition.apiVersion}
                  onChange={(e) => setOrgDefinition({...orgDefinition, apiVersion: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="62.0">62.0 </option>
                  <option value="61.0">61.0 </option>
                  <option value="60.0">60.0 </option>
                  <option value="59.0">59.0 </option>
                  <option value="58.0">58.0 </option>
                  <option value="57.0">57.0 </option>
                  <option value="56.0">56.0 </option>
                  <option value="55.0">55.0 </option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Features</label>
                <div className="border rounded p-2">
                  <div className="mb-2">
                    <input 
                      type="text" 
                      placeholder="Search features..."
                      className="w-full p-2 border rounded mb-2"
                      onChange={(e) => {
                        // Feature search functionality 
                      }}
                    />
                    <div className="flex mb-2">
                      <button 
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2"
                        onClick={handleSelectAllFeatures}
                      >
                        Select All
                      </button>
                      <button 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        onClick={handleClearAllFeatures}
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                    {availableFeatures.map(feature => (
                      <label key={feature} className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={orgDefinition.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="mr-2"
                        />
                        <span className="text-sm">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Org Settings</label>
                <div className="border rounded p-3 bg-gray-50">
                  <p className="text-sm text-gray-500 mb-2">Advanced settings can be added here. For simplicity, we're showing basic configurations only.</p>
                  <details>
                    <summary className="text-blue-600 cursor-pointer text-sm">Show Examples</summary>
                    <div className="mt-2 text-xs text-gray-600">
                      <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
{`"settings": {
  "lightningExperienceSettings": {
    "enableS1DesktopEnabled": true
  },
  "mobileSettings": {
    "enableS1EncryptedStoragePref2": false
  },
  "securitySettings": {
    "passwordPolicies": {
      "complexity": "AlphaNumeric",
      "minLength": 8
    }
  }
}`}
                      </pre>
                    </div>
                  </details>
                </div>
              </div>
              
              <button 
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => setActiveTab(1)}
              >
                Next: Select Metadata
              </button>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between mb-2">
                <h2 className="text-xl font-semibold">Generated Definition (JSON)</h2>
                <button 
                  className="text-blue-600 text-sm hover:text-blue-800"
                  onClick={() => copyToClipboard(generateJSON())}
                >
                  Copy to Clipboard
                </button>
              </div>
              <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-auto h-96 text-sm">
                {generateJSON()}
              </pre>
            </div>
          </div>
        )}
        
        {activeTab === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Metadata Types</h2>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Metadata Types</label>
                <div className="border rounded p-2">
                  <div className="mb-2">
                    <input 
                      type="text" 
                      placeholder="Search metadata types..."
                      className="w-full p-2 border rounded mb-2"
                    />
                    <div className="flex mb-2">
                      <button 
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2"
                        onClick={handleSelectAllMetadata}
                      >
                        Select All
                      </button>
                      <button 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-2"
                        onClick={handleClearAllMetadata}
                      >
                        Clear All
                      </button>
                      <button 
                        className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
                        onClick={handleSelectCommonMetadata}
                      >
                        Common Types
                      </button>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {selectedMetadataTypes.map((type, index) => (
                      <div key={type.name} className="py-2 border-b last:border-b-0">
                        <label className="flex items-center">
                          <input 
                            type="checkbox" 
                            checked={type.selected}
                            onChange={() => handleMetadataTypeToggle(index)}
                            className="mr-2"
                          />
                          <span className="font-medium">{type.name}</span>
                        </label>
                        {type.selected && (
                          <div className="ml-6 mt-2">
                            <label className="text-sm text-gray-600 block mb-1">Members (comma-separated, * for all)</label>
                            <input 
                              type="text" 
                              value={type.members.join(',')}
                              onChange={(e) => {
                                const updated = [...selectedMetadataTypes];
                                updated[index].members = e.target.value.split(',').map(m => m.trim());
                                setSelectedMetadataTypes(updated);
                              }}
                              placeholder="e.g., *, Account, Contact, CustomObject1__c"
                              className="w-full p-1 border rounded text-sm"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
                  onClick={() => setActiveTab(0)}
                >
                  Back: Org Definition
                </button>
                <button 
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  onClick={() => setActiveTab(2)}
                >
                  Next: Command Reference
                </button>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between mb-2">
                <h2 className="text-xl font-semibold">Generated Package.xml</h2>
                <button 
                  className="text-blue-600 text-sm hover:text-blue-800"
                  onClick={() => copyToClipboard(generatePackageXML())}
                >
                  Copy to Clipboard
                </button>
              </div>
              <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-auto h-96 text-sm">
                {generatePackageXML()}
              </pre>
            </div>
          </div>
        )}
        
        {activeTab === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Complete Command Sequence</h2>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">Here are all the commands needed to create a scratch org with production metadata, in order:</p>
                
                <button 
                  className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 flex items-center justify-center mb-4"
                  onClick={copyFormattedCommands}
                >
                  <Terminal className="mr-2" size={20} />
                  Copy All Commands
                </button>
                
                <div className="bg-gray-100 p-3 rounded text-sm text-gray-500 mb-2">
                  Note: These commands assume you've installed Salesforce CLI. 
                  The JSON and XML files will be populated with your configurations from the previous steps.
                </div>
              </div>
              
              <div className="max-h-96 overflow-y-auto border rounded">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="p-3 border-b last:border-b-0 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-blue-800">{index + 1}. {step.title}</h3>
                      <button 
                        className="text-blue-600 text-xs hover:text-blue-800 ml-2"
                        onClick={() => copyToClipboard(step.command)}
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs overflow-x-auto mb-1">
                      $ {displayCommand(step.command)}
                    </pre>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Final Files</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">project-scratch-def.json</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-auto h-40 text-sm">
                  {generateJSON()}
                </pre>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">package.xml</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-auto h-40 text-sm">
                  {generatePackageXML()}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScratchOrgBuilder;