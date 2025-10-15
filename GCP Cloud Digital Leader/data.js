const questions = [
    {
        "question": "Your organization needs a large amount of extra computing power within the next two weeks. After those two weeks, the need for the additional resources will end. Which is the most cost-effective approach?",
        "options": [
            "Use a committed use discount to reserve a very powerful virtual machine",
            "Purchase one very powerful physical computer",
            "Start a very powerful virtual machine without using a committed use discount",
            "Purchase multiple physical computers and scale workload across them"
        ],
        "answer": [2] // C
    },
    {
        "question": "Your organization needs to plan its cloud infrastructure expenditures. Which should your organization do?",
        "options": [
            "Review cloud resource costs frequently, because costs change often based on use",
            "Review cloud resource costs annually as part of planning your organization's overall budget",
            "If your organization uses only cloud resources, infrastructure costs are no longer part of your overall budget",
            "Involve fewer people in cloud resource planning than your organization did for on-premises resource planning"
        ],
        "answer": [0] // A
    },
    {
        "question": "The operating systems of some of your organization's virtual machines may have a security vulnerability. How can your organization most effectively identify all virtual machines that do not have the latest security update?",
        "options": [
            "View the Security Command Center to identify virtual machines running vulnerable disk images",
            "View the Compliance Reports Manager to identify and download a recent PCI audit",
            "View the Security Command Center to identify virtual machines started more than 2 weeks ago",
            "View the Compliance Reports Manager to identify and download a recent SOC 1 audit"
        ],
        "answer": [0] // A
    },
    {
        "question": "You are currently managing workloads running on Windows Server for which your company owns the licenses. Your workloads are only needed during working hours, which allows you to shut down the instances during the weekend. Your Windows Server licenses are up for renewal in a month, and you want to optimize your license cost. What should you do?",
        "options": [
            "Renew your licenses for an additional period of 3 years. Renew your licenses for an additional period of 3 years. Negotiate a cost reduction with your current hosting provider wherein infrastructure cost is reduced when workloads are not in use",
            "Renew your licenses for an additional period of 2 years. Negotiate a cost reduction by committing to an automatic renewal of the licenses at the end of the 2 year period",
            "Migrate the workloads to Compute Engine with a bring-your-own-license (BYOL) model",
            "Migrate the workloads to Compute Engine with a pay-as-you-go (PAYG) model"
        ],
        "answer": [3] // D
    },
    {
        "question": "You are migrating workloads to the cloud. The goal of the migration is to serve customers worldwide as quickly as possible. According to local regulations, certain data is required to be stored in a specific geographic area, and it can be served worldwide. You need to design the architecture and deployment for your workloads. What should you do?",
        "options": [
            "Select a public cloud provider that is only active in the required geographic area",
            "Select a private cloud provider that globally replicates data storage for fast data access",
            "Select a public cloud provider that guarantees data location in the required geographic area",
            "Select a private cloud provider that is only active in the required geographic area"
        ],
        "answer": [2] // C
    },
    {
        "question": "Your organization runs a distributed application in the Compute Engine virtual machines. Your organization needs redundancy, but it also needs extremely fast communication (less than 10 milliseconds) between the parts of the application in different virtual machines. Where should your organization locate this virtual machines?",
        "options": [
            "In a single zone within a single region",
            "In different zones within a single region",
            "In multiple regions, using one zone per region",
            "In multiple regions, using multiple zones per region"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization uses Active Directory to authenticate users. Users' Google account access must be removed when their Active Directory account is terminated. How should your organization meet this requirement?",
        "options": [
            "Configure two-factor authentication in the Google domain",
            "Remove the Google account from all IAM policies",
            "Configure BeyondCorp and Identity-Aware Proxy in the Google domain",
            "Configure single sign-on in the Google domain"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization stores highly sensitive data on-premises that cannot be sent over the public internet. The data must be processed both on-premises and in the cloud. What should your organization do?",
        "options": [
            "Configure Identity-Aware Proxy (IAP) in your Google Cloud VPC network",
            "Create a Cloud VPN tunnel between Google Cloud and your data center",
            "Order a Partner Interconnect connection with your network provider",
            "Enable Private Google Access in your Google Cloud VPC network"
        ],
        "answer": [2] // C
    },
    {
        "question": "Each of the three cloud service models - infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) - offers benefits between flexibility and levels of management by the cloud provider and the customer. Why would SaaS be the right choice of service model?",
        "options": [
            "You want a balance between flexibility for the customer and the level of management by the cloud provider",
            "You want to minimize the level of management by the customer",
            "You want to maximize flexibility for the customer",
            "You want to be able to shift your emphasis between flexibility and management by the cloud provider as business needs change"
        ],
        "answer": [1] // B
    },
    {
        "question": "As your organization increases its release velocity, the VM-based application upgrades take a long time to perform rolling updates due to OS boot times. You need to make the application deployments faster. What should your organization do?",
        "options": [
            "Migrate your VMs to the cloud, and add more resources to them",
            "Convert your applications into containers",
            "Increase the resources of your VMs",
            "Automate your upgrade rollouts"
        ],
        "answer": [1] // B
    },
    {
        "question": "You are a program manager within a Software as a Service (SaaS) company that offers rendering software for animation studios. Your team needs the ability to allow scenes to be scheduled at will and to be interrupted at any time to restart later. Any individual scene rendering takes less than 12 hours to complete, and there is no service-level agreement (SLA) for the completion time for all scenes. Results will be stored in a global Cloud Storage bucket. The compute resources are not bound to any single geographical location. This software needs to run on Google Cloud in a cost-optimized way. What should you do?",
        "options": [
            "Deploy the application on Compute Engine using preemptible instances",
            "Develop the application so it can run in an unmanaged instance group",
            "Create a reservation for the minimum number of Compute Engine instances you will use",
            "Start more instances with fewer virtual centralized processing units (vCPUs) instead of fewer instances with more vCPUs"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization decides to migrate their on-premises environment to the cloud. They need to determine which resource components still need to be assigned ownership. Which two functions does a public cloud provider own? (Choose two.)",
        "options": [
            "Hardware maintenance",
            "Infrastructure architecture",
            "Infrastructure deployment automation",
            "Hardware capacity management",
            "Fixing application security issues"
        ],
        "answer": [0, 3] // AD
    },
    {
        "question": "Your multinational organization has servers running mission-critical workloads on its premises around the world. You want to be able to manage these workloads consistently and centrally, and you want to stop managing infrastructure. What should your organization do?",
        "options": [
            "Migrate the workloads to a public cloud",
            "Migrate the workloads to a central office building",
            "Migrate the workloads to multiple local co-location facilities",
            "Migrate the workloads to multiple local private clouds"
        ],
        "answer": [0] // A
    },
    {
        "question": "Your manager wants to restrict communication of all virtual machines with internet access; with resources in another network; or with a resource outside Compute Engine. It is expected that different teams will create new folders and projects in the near future. How would you restrict all virtual machines from having an external IP address?",
        "options": [
            "Define an organization policy at the root organization node to restrict virtual machine instances from having an external IP address",
            "Define an organization policy on all existing folders to define a constraint to restrict virtual machine instances from having an external IP address",
            "Define an organization policy on all existing projects to restrict virtual machine instances from having an external IP address",
            "Communicate with the different teams and agree that each time a virtual machine is created, it must be configured without an external IP address"
        ],
        "answer": [0] // A
    },
    {
        "question": "Your company’s development team is building an application that will be deployed on Cloud Run. You are designing a CI/CD pipeline so that any new version of the application can be deployed in the fewest number of steps possible using the CI/CD pipeline you are designing. You need to select a storage location for the images of the application after the CI part of your pipeline has built them.",
        "options": [
            "Create a Compute Engine image containing the application",
            "Store the images in Container Registry",
            "Store the images in Cloud Storage",
            "Create a Compute Engine disk containing the application"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization needs to establish private network connectivity between its on-premises network and its workloads running in Google Cloud. You need to be able to set up the connection as soon as possible. Which Google Cloud product or feature should you use?",
        "options": [
            "Cloud Interconnect",
            "Direct Peering",
            "Cloud VPN",
            "Cloud CDN"
        ],
        "answer": [2] // C
    },
    {
        "question": "Your organization is developing an application that will capture a large amount of data from millions of different sensor devices spread all around the world. Your organization needs a database that is suitable for worldwide, high-speed data storage of a large amount of unstructured data. Which Google Cloud product should your organization choose?",
        "options": [
            "Firestore",
            "Cloud Data Fusion",
            "Cloud SQL",
            "Cloud Bigtable"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization needs to build streaming data pipelines. You don’t want to manage the individual servers that do the data processing in the pipelines. Instead, you want a managed service that will automatically scale with the amount of data to be processed. Which Google Cloud product or feature should your organization choose?",
        "options": [
            "Pub/Sub",
            "Dataflow",
            "Data Catalog",
            "Dataprep by Trifacta"
        ],
        "answer": [1] // B
    },
    {
        "question": "What is the difference between Standard and Coldline storage?",
        "options": [
            "Coldline storage is for data for which a slow transfer rate is acceptable.",
            "Standard and Coldline storage have different durability guarantees.",
            "Standard and Coldline storage use different APIs.",
            "Coldline storage is for infrequently accessed data"
        ],
        "answer": [3] // D
    },
    {
        "question": "What would provide near-unlimited availability of computing resources without requiring your organization to procure and provision new equipment?",
        "options": [
            "Public cloud",
            "Containers",
            "Private cloud",
            "Microservices"
        ],
        "answer": [0] // A
    },
    {
        "question": "Which Google Cloud product can report on and maintain compliance on your entire Google Cloud organization to cover multiple projects?",
        "options": [
            "Cloud Logging",
            "Identity and Access Management",
            "Google Cloud Armor",
            "Security Command Center"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization is building an application running in Google Cloud. Currently, software builds, tests, and regular deployments are done manually, but you want to reduce work for the team. Your organization wants to use Google Cloud managed solutions to automate your build, testing, and deployment process. Which Google Cloud product or feature should your organization use?",
        "options": [
            "Cloud Scheduler",
            "Cloud Code",
            "Cloud Build",
            "Cloud Deployment Manager"
        ],
        "answer": [2] // C
    },
    {
        "question": "Your company has recently acquired three growing startups in three different countries. You want to reduce overhead in infrastructure management and keep your costs low without sacrificing security and quality of service to your customers. How should you meet these requirements?",
        "options": [
            "Host all your subsidiaries’ services on-premises together with your existing services.",
            "Host all your subsidiaries’ services together with your existing services on the public cloud",
            "Build a homogeneous infrastructure at each subsidiary, and invest in training the engineers.",
            "Build a homogeneous infrastructure at each subsidiary, and invest in hiring more engineers."
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization is developing a mobile app and wants to select a fully featured cloud-based compute platform for it. Which Google Cloud product or feature should your organization use?",
        "options": [
            "Google Kubernetes Engine",
            "Firebase",
            "Cloud Functions",
            "App Engine"
        ],
        "answer": [1] // B
    },
    {
        "question": "You are a program manager for a team of developers who are building an event-driven application to allow users to follow one another’s activities in the app. Each time a user adds himself as a follower of another user, a write occurs in the real-time database. The developers will develop a lightweight piece of code that can respond to database writes and generate a notification to let the appropriate users know that they have gained new followers. The code should integrate with other cloud services such as Pub/Sub, Firebase, and Cloud APIs to streamline the orchestration process. The application requires a platform that automatically manages underlying infrastructure and scales to zero when there is no activity. Which primary compute resource should your developers select, given these requirements?",
        "options": [
            "Google Kubernetes Engine",
            "Cloud Functions",
            "App Engine flexible environment",
            "Compute Engine"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your company security team manages access control to production systems using an LDAP directory group. How is this access control managed in the Google Cloud production project?",
        "options": [
            "Assign the proper role to the Service Account in the project's IAM Policy",
            "Grant each user the roles/iam.serviceAccountUser role on a service account that exists in the Google Group.",
            "Assign the proper role to the Google Group in the project's IAM Policy.",
            "Create the project in a folder with the same name as the LDAP directory group."
        ],
        "answer": [2] // C 
    },
    {
        "question": "Your organization wants to optimize its use of Google Cloud's discounts on virtual machine-based workloads. You plan to use 200 CPUs constantly for the next 3 years, and you forecast that spikes of up to 300 CPUs will occur approximately 30% of the time. What should you choose?",
        "options": [
            "1-year committed use discount for 200 CPUs",
            "3-year committed use discount for 300 CPUs",
            "3-year committed use discount for 200 CPUs",
            "Regular pay-as-you-go pricing"
        ],
        "answer": [2] // C 
    },
    {
        "question": "Your organization wants to be sure that its expenditures on cloud services are in line with the budget. Which two Google Cloud cost management features help your organization gain greater visibility into its cloud resource costs? (Choose two.)",
        "options": [
            "Billing dashboards",
            "Resource labels",
            "Sustained use discounts",
            "Financial governance policies",
            "Payments profile"
        ],
        "answer": [0, 1] // AB 
    },
    {
        "question": "Your organization wants to migrate your on-premises environment to Google Cloud. The on-premises environment consists of containers and virtual machine instances. Which Google Cloud products can help migrate the container images and the virtual machine disks?",
        "options": [
            "Compute Engine and Filestore",
            "Artifact Registry and Cloud Storage",
            "Dataflow and BigQuery",
            "Pub/Sub and Cloud Storage"
        ],
        "answer": [1] // B 
    },
    {
        "question": "Your organization needs to minimize how much it pays for data traffic from the Google network to the internet. What should your organization do?",
        "options": [
            "Choose the Standard network service tier",
            "Choose the Premium network service tier",
            "Deploy Cloud VPN",
            "Deploy Cloud NAT"
        ],
        "answer": [0] // A 
    },
    {
        "question": "Your organization meant to purchase a 3-year Committed Use Discount, but accidentally purchased a 1-year Committed Use Discount instead. What should your organization do?",
        "options": [
            "Contact your financial institution.",
            "Contact Trust and Safety.",
            "Contact Cloud Billing Support.",
            "Contact Technical Support."
        ],
        "answer": [2] // C  
    },
    {
        "question": "Your organization recently migrated its compute workloads to Google Cloud. You want these workloads in Google Cloud to privately and securely access your large volume of on-premises data, and you also want to minimize latency. What should your organization do?",
        "options": [
            "Use Storage Transfer Service to securely make your data available to Google Cloud",
            "Create a VPC between your on-premises data center and your Google resources",
            "Peer your on-premises data center to Google's Edge Network",
            "Use Transfer Appliance to securely make your data available to Google Cloud"
        ],
        "answer": [1] // B 
    },
    {
        "question": "Your organization needs to allow a production job to have access to a BigQuery dataset. The production job is running on a Compute Engine instance that is part of an instance group. What should be included in the IAM Policy on the BigQuery dataset?",
        "options": [
            "The Compute Engine instance group",
            "The project that owns the Compute Engine instance",
            "The Compute Engine service account",
            "The Compute Engine instance"
        ],
        "answer": [2] // C 
    },
    {
        "question": "Your organization needs to ensure that the Google Cloud resources of each of your departments are segregated from one another. Each department has several environments of its own: development, testing, and production. Which strategy should your organization choose?",
        "options": [
            "Create a project per department, and create a folder per environment in each project.",
            "Create a folder per department, and create a project per environment in each folder.",
            "Create a Cloud Identity domain per department, and create a project per environment in each domain.",
            "Create a Cloud Identity domain per environment, and create a project per department in each domain."
        ],
        "answer": [1] // B 
    },
    {
        "question": "Your large and frequently changing organization’s user information is stored in an on-premises LDAP database. The database includes user passwords and group and organization membership. How should your organization provision Google accounts and groups to access Google Cloud resources?",
        "options": [
            "Replicate the LDAP infrastructure on Compute Engine",
            "Use the Firebase Authentication REST API to create users",
            "Use Google Cloud Directory Sync to create users",
            "Use the Identity Platform REST API to create users"
        ],
        "answer": [2] // C 
    },
    {
        "question": "How do Migrate for Compute Engine and Migrate for Anthos differ?",
        "options": [
            "Unlike Migrate for Anthos, Migrate for Compute Engine assumes that the migration source is VMware vSphere.",
            "Migrate for Compute Engine charges for ingress, but Migrate for Anthos does not.",
            "Migrate for Compute Engine is closed source, and Migrate for Anthos is open source.",
            "Migrate for Anthos migrates to containers, and Migrate for Compute Engine migrates to virtual machines"
        ],
        "answer": [3] // D 
    },
    {
        "question": "Your organization needs to process large amounts of data from an online application that operates continuously. You do not want to be required to provision infrastructure or create server clusters. What should your organization choose?",
        "options": [
            "Compute Engine with BigQuery",
            "Dataproc",
            "Google Kubernetes Engine with Cloud Bigtable",
            "Dataflow"
        ],
        "answer": [3] // D 
    },
    {
        "question": "Your team is publishing research results and needs to make large amounts of data available to other researchers within the professional community and the public at minimum cost. How should you host the data?",
        "options": [
            "Use a Cloud Storage bucket and enable xRequester Pays.",
            "Use a Cloud Storage bucket and provide Signed URLs for the data files.",
            "Use a Cloud Storage bucket and set up a Cloud Interconnect connection to allow access to the data.",
            "Host the data on-premises, and set up a Cloud Interconnect connection to allow access to the data."
        ],
        "answer": [0] // A 
    },
    {
        "question": "Your organization is defining the resource hierarchy for its new application in Google Cloud. You need separate development and production environments. The production environment will be deployed in Compute Engine in two regions. Which structure should your organization choose?",
        "options": [
            "Create a single project for all environments. Use labels to segregate resources by environment.",
            "Create a single project for all environments. Use tags to segregate resources by environment.",
            "Create one project for the development environment and one project for the production environment.",
            "Create two projects for the development environment and two projects for the production environment (one for each region)."
        ],
        "answer": [2] // C 
    },
    {
        "question": "Your company needs to segment Google Cloud resources used by each team from the others. The teams’ efforts are changing frequently, and you need to reduce operational risk and maintain cost visibility. Which approach does Google recommend?",
        "options": [
            "One project per team.",
            "One organization per team.",
            "One project that contains all of each team’s resources.",
            "One top-level folder per team."
        ],
        "answer": [3] // D 
    },
    {
        "question": "An organization needs to categorize text-based customer reviews on their website using a pre-trained machine learning model. Which Google Cloud product or service should the organization use?",
        "options": [
            "Cloud Natural Language API",
            "Dialogflow",
            "Recommendations AI",
            "TensorFlow"
        ],
        "answer": [0] // A 
    },
    {
        "question": "An organization relies on online seasonal sales for the majority of their annual revenue. Why should the organization use App Engine for their customer app?",
        "options": [
            "Automatically adjusts physical inventory in real time",
            "Autoscales during peaks in demand",
            "Runs maintenance during seasonal sales",
            "Recommends the right products to customers"
        ],
        "answer": [1] // B 
    },
    {
        "question": "An organization is searching for an open-source machine learning platform to build and deploy their own custom machine learning applications using TPUs. Which Google Cloud product or service should the organization use?",
        "options": [
            "TensorFlow",
            "BigQuery ML",
            "Vision API",
            "AutoML Vision"
        ],
        "answer": [0] // A 
    },
    {
        "question": "A global organization is developing an application to manage payments and online bank accounts in multiple regions. Each transaction must be handled consistently in their database, and they anticipate almost unlimited growth in the amount of data stored. Which Google Cloud product should the organization choose?",
        "options": [
            "Cloud SQL",
            "Cloud Spanner",
            "Cloud Storage",
            "BigQuery"
        ],
        "answer": [1] // B 
    },
    {
        "question": "Your organization consists of many teams. Each team has many Google Cloud projects. Your organization wants to simplify the management of identity and access policies for these projects. How can you group these projects to meet this goal?",
        "options": [
            "Group each team's projects into a separate domain",
            "Assign labels based on the virtual machines that are part of each team's projects",
            "Use folders to group each team's projects",
            "Group each team's projects into a separate organization node"
        ],
        "answer": [2] // C 
    },
    {
        "question": "An organization is planning its cloud expenditure. What should the organization do to control costs?",
        "options": [
            "Consider cloud resource costs as capital expenditure in annual planning.",
            "Use only cloud resources; they have no cloud infrastructure costs.",
            "Review cloud resource costs frequently because costs depend on usage",
            "Assess cloud resources costs only when SLO is not met by their cloud provider."
        ],
        "answer": [2] // C 
    },
    {
        "question": "What is an example of unstructured data that organizations can capture from social media?",
        "options": [
            "Post comments",
            "Tagging",
            "Profile picture",
            "Location"
        ],
        "answer": [0] // A 
    },
    {
        "question": "An organization is using machine learning to make predictions. One of their datasets mistakenly includes mislabeled data. How will the prediction be impacted?",
        "options": [
            "Increased risk of privacy leaks",
            "Increased risk of inaccuracy",
            "Decreased model compatibility",
            "Decreased model training time"
        ],
        "answer": [1] // B 
    },
    {
        "question": "An organization has servers running mission-critical workloads on-premises around the world. They want to modernize their infrastructure with a multi-cloud architecture. What benefit could the organization experience?",
        "options": [
            "Ability to disable regional network connectivity during cyber attacks",
            "Ability to keep backups of their data on-premises in case of failure",
            "Full management access to their regional infrastructure",
            "Reduced likelihood of system failure during high demand events"
        ],
        "answer": [3] // D 
    },
    {
        "question": "An organization needs to run frequent updates for their business app. Why should the organization use Google Kubernetes Engine (GKE)?",
        "options": [
            "Customer expectations can be adjusted without using marketing tools",
            "Seamless changes can be made without causing any application downtime",
            "GKE handles version control seamlessly and out of the box",
            "GKE is well suited for all monolithic applications"
        ],
        "answer": [1] // B 
    },
    {
        "question": "An organization needs to store structured, semi-structured, and unstructured data in its raw native format in the same repository. Which cloud data management solution should the organization use?",
        "options": [
            "Data field",
            "Data lake",
            "Database",
            "Data warehouse"
        ],
        "answer": [1] // B 
    },
    {
        "question": "An organization wants to use its users to validate a series of new features for their app. Why should they use App Engine?",
        "options": [
            "Because their app is containerized and enabled by microservices",
            "Because the updated app will only include new features",
            "To run different versions of the app for different users",
            "To run different versions of the app for the same user"
        ],
        "answer": [2] // C 
    },
    {
        "question": "How would an organization benefit from using Looker?",
        "options": [
            "Optimal identity and access management",
            "Leading serverless warehousing technology",
            "Robust data roll-back accuracy",
            "Advanced business intelligence and analytics"
        ],
        "answer": [3] // D 
    },
    {
        "question": "An organization delivers a proactive healthcare service. They want to efficiently and automatically collect patient data. What should the organization encourage the patients to do?",
        "options": [
            "Use at-home health screening devices and then upload their health data daily",
            "Wear Internet of Things (IoT) devices that upload their health data in real time",
            "Self-assess their health data and then document and upload it in real time",
            "Visit a nurse who will use Internet of Things (IoT) devices to collect and upload their health data"
        ],
        "answer": [1] // B 
    },
    {
        "question": "How would a global organization benefit from managing their data with Cloud Spanner?",
        "options": [
            "Cloud Spanner is optimized for cold storage",
            "Cloud Spanner replicates data across regions in real time",
            "Cloud Spanner is optimized to ingest unstructured data",
            "Cloud Spanner visualizes and analyzes data in real time"
        ],
        "answer": [1] // B 
    },
    {
        "question": "An employee receives an email from their internet service provider asking for their bank account number and password. Which cybersecurity threat is this?",
        "options": [
            "Ransomware",
            "Distributed Denial of Service",
            "Spamming",
            "Phishing"
        ],
        "answer": [3] // D 
    },
    {
        "question": "An organization wants to move from a tactical cloud adoption approach to a transformational approach. How should they adapt the way they lead the organization?",
        "options": [
            "Increase top-down visibility and foster a culture of blamelessness",
            "Shift from an operational expenditure model to capital expenditure",
            "Drive cloud adoption with an individual contributor focus",
            "Invest in on-premises infrastructure to redesign relationships between IT and employees"
        ],
        "answer": [0] // A 
    },
    {
        "question": "Why is data stored in Google Cloud secure and private?",
        "options": [
            "Data is encrypted by the Security Command Center",
            "Data is encrypted by Cloud Data Loss Prevention",
            "Data is encrypted by default",
            "Data is encrypted when an appropriate tag is applied"
        ],
        "answer": [2] // C 
    },
    {
        "question": "An organization wants to use multiple marketing datasets to forecast user acquisition. How should they use cloud technology to gain new insights from the data?",
        "options": [
            "Import the datasets into a custom data warehouse, and then archive old data",
            "Import and selectively archive the datasets in a custom data lake",
            "Separate the datasets and make predictions using machine learning",
            "Combine the datasets and make predictions using machine learning"
        ],
        "answer": [3] // D 
    },
    {
        "question": "An organization wants to collect metrics and metadata from their cloud applications and put them into dashboards. Which Google Cloud tool should they use?",
        "options": [
            "Cloud Monitoring",
            "Cloud Trace",
            "Cloud Logging",
            "Cloud Debugger"
        ],
        "answer": [0] // A 
    },
    {
        "question": "A manager wants to review Google Cloud data access among their employees. Who is responsible for defining data access policies?",
        "options": [
            "Cloud Identity",
            "Google Cloud Customer Care team",
            "Their organization's IT team",
            "Their organization's end users"
        ],
        "answer": [2] // C 
    },
    {
        "question": "An organization has decided to modernize their applications in the cloud to keep up with their customers' needs. What may have prompted this business decision?",
        "options": [
            "Their on-premises applications only autoscale to meet demand",
            "They want to change from a pay-as-you-go model to a capital expenditure model",
            "Their source code changes erroneously without developer interaction",
            "Their on-premises applications take months to update and deploy"
        ],
        "answer": [3] // D 
    },
    {
        "question": "An organization needs to categorize a large group of photographs using pre-trained machine learning. Which Google Cloud product or service should the organization use?",
        "options": [
            "Vision API",
            "BigQuery ML",
            "AutoML Vision",
            "Looker"
        ],
        "answer": [0] // A 
    },
    {
        "question": "An organization provides a loyalty program for its customers. It recently partnered with other businesses so that customers can get loyalty points at a range of other stores. Why should the organization use application programming interfaces (APIs)?",
        "options": [
            "To migrate all partner data for disaster recovery",
            "To analyze and publish loyalty program statistics to a dashboard",
            "To personalize recommendations for loyalty card users",
            "To connect third-party systems to ensure up-to-date information"
        ],
        "answer": [3] // D 
    },
    {
        "question": "A travel agency wants to seamlessly share their social media content with partners. What should the organization use?",
        "options": [
            "A NoSQL database",
            "Anthos Config Management",
            "The App Engine standard environment",
            "An application programming interface (API)"
        ],
        "answer": [3] // D
    },
    {
        "question": "How do out-of-the-box APIs make artificial intelligence and machine learning more accessible for all Google Cloud customers?",
        "options": [
            "They don't require technical specialists",
            "They don't require data input and validation",
            "They require fewer security permissions",
            "They all require custom training models"
        ],
        "answer": [0] // A 
    },
    {
        "question": "An organization needs to migrate specialized workloads to the cloud while maintaining their existing complex licensing and architecture. What Google Cloud solution should the organization use?",
        "options": [
            "Compute Engine",
            "Bare Metal Solution",
            "Cloud Run",
            "Cloud Functions"
        ],
        "answer": [1] // B 
    },
    {
        "question": "An organization finds that the amount of cash in their vending machines doesn't match the value of items sold. They have decided to upgrade their vending machines with cloud-based mobile payment systems. How could the organization benefit from this upgrade?",
        "options": [
            "They could relax data access permissions",
            "They could reduce their error budget overspend",
            "They could improve their perimeter security",
            "They could view data history to see transactions"
        ],
        "answer": [3] // D 
    },
    {
        "question": "A food delivery service needs access to real-time menu information from all partner restaurants. They also need to share customer order information with the restaurants in real time. What should the organization use?",
        "options": [
            "Site reliability engineering (SRE)",
            "An application programming interface (API)",
            "A customized machine learning model",
            "A multi-regional database"
        ],
        "answer": [1] // B 
    },
    {
        "question": "An organization is planning to create many new applications and needs a system for managing and orchestrating their containers. Why should they use Google Kubernetes Engine?",
        "options": [
            "It enables rapid application deployment and testing",
            "It optimizes virtual machine performance",
            "It connects legacy systems to an application",
            "It provides pre-written source code for application development"
        ],
        "answer": [0] // A 
    },
    {
        "question": "How does Google Cloud enable customers to leverage the power of artificial intelligence and machine learning?",
        "options": [
            "With scalable on-premises tensor processing units",
            "With APIs and tools for users at different levels of expertise",
            "With affordable and scalable quantum computing",
            "With machine learning models that always require custom training"
        ],
        "answer": [1] // B 
    },
    {
        "question": "An online retail organization wants to optimize their service. What is an example of unstructured data that they can use to make decisions?",
        "options": [
            "Customer survey comments",
            "Seller location coordinates",
            "Product sales trends",
            "Warehouse inventory records"
        ],
        "answer": [0] // A 
    },
    {
        "question": "An organization's public cloud provider failed to meet their SLA of 99.9% availability. What is the potential impact on the organization?",
        "options": [
            "The organization risks using up their error budget",
            "Renegotiation of the SLA to put less emphasis on uptime could be necessary",
            "Unexpected downtime could risk the loss of customers",
            "All data stored in their database could be unexpectedly lost"
        ],
        "answer": [2] // C 
    },
    {
        "question": "An organization needs to train a machine learning model to categorize photographs. Which Google Cloud product or service should the organization use?",
        "options": [
            "Video Intelligence API",
            "AutoML Vision",
            "BigQuery ML",
            "Looker"
        ],
        "answer": [1] // B 
    },
    {
        "question": "A multinational organization has decided to use public cloud services to modernize their IT infrastructure. What is one benefit of doing this?",
        "options": [
            "They can perform hardware maintenance outside of normal business hours",
            "They can expect 100% service availability in all regions",
            "Built-in security is no longer required during data migrations",
            "Access to data and computer resources is not tied to a geographical location"
        ],
        "answer": [3] // D 
    },
    {
        "question": "Your organization needs to analyze data in order to gather insights into its daily operations. You only want to pay for the data you store and the queries you perform. Which Google Cloud product should your organization choose for its data analytics warehouse?",
        "options": [
            "Cloud SQL",
            "Dataproc",
            "Cloud Spanner",
            "BigQuery"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization needs to categorize objects in a large group of static images using machine learning. Which Google Cloud product or service should your organization use?",
        "options": [
            "BigQuery ML",
            "AutoML Video Intelligence",
            "Cloud Vision API",
            "AutoML Tables"
        ],
        "answer": [2] // C
    },
    {
        "question": "Your company has been using a shared facility for data storage and will be migrating to Google Cloud. One of the internal applications uses Linux custom images that need to be migrated. Which Google Cloud product should you use to maintain the custom images?",
        "options": [
            "App Engine flexible environment",
            "Compute Engine",
            "App Engine standard environment",
            "Google Kubernetes Engine"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization runs all its workloads on Compute Engine virtual machine instances. Your organization has a security requirement: the virtual machines are not allowed to access the public internet. The workloads running on those virtual machines need to access BigQuery and Cloud Storage, using their publicly accessible interfaces, without violating the security requirement. Which Google Cloud product or feature should your organization use?",
        "options": [
            "Identity-Aware Proxy",
            "Cloud NAT (network address translation)",
            "VPC internal load balancers",
            "Private Google Access"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization wants to run a container-based application on Google Cloud. This application is expected to increase in complexity. You have a security need for fine-grained control of traffic between the containers. You also have an operational need to exercise fine-grained control over the application’s scaling policies. What Google Cloud product or feature should your organization use?",
        "options": [
            "Google Kubernetes Engine cluster",
            "App Engine",
            "Cloud Run",
            "Compute Engine virtual machines"
        ],
        "answer": [0] // A
    },
    {
        "question": "Which Google Cloud product provides a consistent platform for multi-cloud application deployments and extends other Google Cloud services to your organization’s environment?",
        "options": [
            "Google Kubernetes Engine",
            "Virtual Private Cloud",
            "Compute Engine",
            "Anthos"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization wants to migrate its data management solutions to Google Cloud because it needs to dynamically scale up or down and to run transactional SQL queries against historical data at scale. Which Google Cloud product or service should your organization use?",
        "options": [
            "BigQuery",
            "Cloud Bigtable",
            "Pub/Sub",
            "Cloud Spanner"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization is migrating to Google Cloud. As part of that effort, it needs to move terabytes of data from on-premises file servers to Cloud Storage. Your organization wants the migration process to be automated and to be managed by Google. Your organization has an existing Dedicated Interconnect connection that it wants to use. Which Google Cloud product or feature should your organization use?",
        "options": [
            "Storage Transfer Service",
            "Migrate for Anthos",
            "BigQuery Data Transfer Service",
            "Transfer Appliance"
        ],
        "answer": [0] // A
    },
    {
        "question": "Which Google Cloud product is designed to reduce the risks of handling personally identifiable information (PII)?",
        "options": [
            "Cloud Storage",
            "Google Cloud Armor",
            "Cloud Data Loss Prevention",
            "Secret Manager"
        ],
        "answer": [2] // C
    },
    {
        "question": "Which Google Cloud product or feature makes specific recommendations based on security risks and compliance violations?",
        "options": [
            "Google Cloud firewalls",
            "Security Command Center",
            "Cloud Deployment Manager",
            "Google Cloud Armor"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization wants an economical solution to store data such as files, graphical images, and videos and to access and share them securely. Which Google Cloud product or service should your organization use?",
        "options": [
            "Cloud Storage",
            "Cloud SQL",
            "Cloud Spanner",
            "BigQuery"
        ],
        "answer": [0] // A
    },
    {
        "question": "Your organization offers public mobile apps and websites. You want to migrate to a Google Cloud-based solution for checking and maintaining your users' usernames and passwords and controlling their access to different resources based on their identity. Which should your organization choose?",
        "options": [
            "VPN tunnels",
            "Identity Platform",
            "Compute Engine firewalls",
            "Private Google Access"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization is moving an application to Google Cloud. As part of that effort, it needs to migrate the application’s working database from another cloud provider to Cloud SQL. The database runs on the MySQL engine. The migration must cause minimal disruption to users. Data must be secured while in transit. Which should your organization use?",
        "options": [
            "BigQuery Data Transfer Service",
            "MySQL batch insert",
            "Database Migration Service",
            "Cloud Composer"
        ],
        "answer": [2] // C
    },
    {
        "question": "Your organization needs to restrict access to a Cloud Storage bucket. Only employees who are based in Canada should be allowed to view the contents. What is the most effective and efficient way to satisfy this requirement?",
        "options": [
            "Deploy the Cloud Storage bucket to a Google Cloud region in Canada",
            "Configure Google Cloud Armor to allow access to the bucket only from IP addresses based in Canada",
            "Give each employee who is based in Canada access to the bucket",
            "Create a group consisting of all Canada-based employees, and give the group access to the bucket"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization wants to predict the behavior of visitors to its public website. To do that, you have decided to build a machine learning model. Your team has database-related skills but only basic machine learning skills, and would like to use those database skills. Which Google Cloud product or feature should your organization choose?",
        "options": [
            "BigQuery ML",
            "LookML",
            "TensorFlow",
            "Cloud SQL"
        ],
        "answer": [0] // A
    },
    {
        "question": "Your organization is releasing its first publicly available application in Google Cloud. The application is critical to your business and customers and requires a 2-hour SLA. How should your organization set up support to minimize costs?",
        "options": [
            "Enroll in Premium Support",
            "Enroll in Enhanced Support",
            "Enroll in Standard Support",
            "Enroll in Basic Support"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization is running all its workloads in a private cloud on top of a hypervisor. Your organization has decided it wants to move to Google Cloud as quickly as possible. Your organization wants minimal changes to the current environment, while using the maximum amount of managed services Google offers. What should your organization do?",
        "options": [
            "Migrate the workloads to Google Cloud VMware Engine",
            "Migrate the workloads to Compute Engine",
            "Migrate the workloads to Bare Metal Solution",
            "Migrate the workloads to Google Kubernetes Engine"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization is developing and deploying an application on Google Cloud. Tracking your Google Cloud spending needs to stay as simple as possible. What should you do to ensure that workloads in the development environment are fully isolated from production workloads?",
        "options": [
            "Apply a unique tag to development resources",
            "Associate the development resources with their own network",
            "Associate the development resources with their own billing account",
            "Put the development resources in their own project"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your company is running the majority of its workloads in a co-located data center. The workloads are running on virtual machines (VMs) on top of a hypervisor and use either Linux or Windows server editions. As part of your company’s transformation strategy, you need to modernize workloads as much as possible by adopting cloud-native technologies. You need to migrate the workloads into Google Cloud. What should you do?",
        "options": [
            "Export the VMs into VMDK format, and import them into Compute Engine",
            "Export the VMs into VMDK format, and import them into Google Cloud VMware Engine",
            "Migrate the workloads using Migrate for Compute Engine",
            "Migrate the workloads using Migrate for Anthos"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization is developing an application that will manage payments and online bank accounts located around the world. The most critical requirement for your database is that each transaction is handled consistently. Your organization anticipates almost unlimited growth in the amount of data stored. Which Google Cloud product should your organization choose?",
        "options": [
            "Cloud SQL",
            "Cloud Storage",
            "Firestore",
            "Cloud Spanner"
        ],
        "answer": [3] // D
    },
    {
        "question": "Your organization is developing a plan for migrating to Google Cloud. What is a best practice when initially configuring your Google Cloud environment?",
        "options": [
            "Create a project via Google Cloud Console per department in your company",
            "Define your resource hierarchy with an organization node on top",
            "Create projects based on team members' requests",
            "Make every member of your company the project owner"
        ],
        "answer": [1] // B
    },
    {
        "question": "Your organization runs an application on virtual machines in Google Cloud. This application processes incoming images. This activity takes hours to create a result for each image. The workload for this application normally stays at a certain baseline level, but at regular intervals it spikes to a much greater workload. Your organization needs to control the cost to run this application. What should your organization do?",
        "options": [
            "Purchase committed use discounts for the baseline load",
            "Purchase committed use discounts for the expected spike load",
            "Leverage sustained use discounts for your virtual machines",
            "Run the workload on preemptible VM instances"
        ],
        "answer": [0] // A
    },
    {
        "question": "How should a multinational organization that is migrating to Google Cloud consider security and privacy regulations to ensure that it is in compliance with global standards?",
        "options": [
            "Comply with data security and privacy regulations in each geographical region",
            "Comply with regional standards for data security and privacy, because they supersede all international regulations",
            "Comply with international standards for data security and privacy, because they supersede all regional regulations",
            "Comply with regional data security regulations, because they're more complex than privacy standards"
        ],
        "answer": [0] // A
    },
    {
        "question": "Your organization runs many workloads in different Google Cloud projects, each linked to the same billing account. Each project’s workload costs can vary from month to month, but the overall combined cost of all projects is relatively stable. Your organization needs to optimize its cost. What should your organization do?",
        "options": [
            "Purchase a commitment per project for each project’s usual minimum",
            "Create a billing account per project, and link each project to a different billing account",
            "Turn on committed use discount sharing, and create a commitment for the combined usage",
            "Move all workloads from all different projects into one single consolidated project"
        ],
        "answer": [2] // C
    },
    {
        "question": "Which Google Cloud service or feature lets you build machine learning models using Standard SQL and data in a data warehouse?",
        "options": [
            "BigQuery ML",
            "TensorFlow",
            "AutoML Tables",
            "Cloud Bigtable ML"
        ],
        "answer": [0] // A
    },
    {
        "question": "An e-commerce organization is reviewing their cloud data storage. What type of raw data can they store in a relational database without any processing?",
        "options": [
            "Product inventory",
            "Product photographs",
            "Instructional videos",
            "Customer chat history"
        ],
        "answer": [0] //A
    },
    {
        "question": "An organization wants to use Apigee to manage all their application programming interfaces (APIs). What will Apigee enable the organization to do?",
        "options": [
            "Increase application privacy",
            "Measure and track API performance",
            "Analyze application development speed",
            "Market and sell APIs"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is migrating their business applications from on-premises to the cloud. How could this impact their operations and personnel costs?",
        "options": [
            "Reduced on-premises infrastructure management costs",
            "Increased on-premises hardware maintenance costs",
            "Reduced cloud software licensing costs",
            "Increased cloud hardware management costs"
        ],
        "answer": [0] // A
    },
    {
        "question": "A hotel wants to modernize their legacy systems so that customers can make reservations through a mobile app. What's the benefit of using an application programming interface (API) to do this?",
        "options": [
            "They do not have to develop the end-user application",
            "They can depreciate their legacy systems",
            "They can transform their systems to be cloud-native",
            "They do not have to rewrite the legacy system"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization wants to develop an application that can be personalized to user preferences throughout the year. Why should they build a cloud-native application instead of modernizing their existing on-premises application?",
        "options": [
            "Developers can rely on the cloud provider for all source code",
            "Developers can launch new features in an agile way",
            "IT managers can migrate existing application architecture without needing updates",
            "IT managers can accelerate capital expenditure planning"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to digitize and share large volumes of historical text and images. Why is a public cloud a better option than an on-premises solution?",
        "options": [
            "In-house hardware management",
            "Provides physical encryption key",
            "Cost-effective at scale",
            "Optimizes capital expenditure"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is training a machine learning model to predict extreme weather events in their country. How should they collect data to maximize prediction accuracy?",
        "options": [
            "Collect all weather data evenly across all cities",
            "Collect all weather data primarily from at-risk cities",
            "Collect extreme weather data evenly across all cities",
            "Collect extreme weather data primarily from at-risk cities"
        ],
        "answer": [0] // A
    },
    {
        "question": "Which technology allows organizations to run multiple computer operating systems on a single piece of physical hardware?",
        "options": [
            "Hypervisor",
            "Containers",
            "Serverless computing",
            "Open source"
        ],
        "answer": [0] // A
    },
    {
        "question": "A retail company stores their product inventory in a legacy system. Often, customers find products on the company’s website and want to purchase them in-store. However, when they arrive, they discover that the products are out of stock. How could the company benefit from using an application programming interface (API)?",
        "options": [
            "To create personalized product recommendations for customers",
            "To optimize their on-premises legacy system stability",
            "By manually linking each inventory system to the website on a case-by-case basis",
            "By programmatically connecting the inventory system to their website"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization is making a strategic change to customer support in response to feedback. They plan to extend their helpline availability hours. Why is the organization making this change?",
        "options": [
            "Users expect professional expertise",
            "Users require personalization",
            "Users expect always-on services",
            "Users require regional access"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to use all available data to offer predictive suggestions on their website that improve over time. Which method should the organization use?",
        "options": [
            "Data automation",
            "Trends analysis",
            "Machine learning",
            "Multiple regression"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization operates their entire IT infrastructure from Google Cloud. What should they do to prepare for data breaches?",
        "options": [
            "Reduce reliance on multi-factor authentication",
            "Data security is Google’s responsibility, so preparation is minimal",
            "Create an incident plan to mitigate impacts",
            "Strengthen their data center perimeter security"
        ],
        "answer": [2] // C
    },
    {
        "question": "How does a large hotel chain benefit from storing their customer reservation data in the cloud?",
        "options": [
            "On-premises hardware access to transaction data",
            "Real-time data transformation at scale within an on-premises database",
            "Real-time business transaction accuracy at scale",
            "Physical hardware access during peak demand"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization needs to search an application’s source code to identify a potential issue. The application is distributed across multiple containers. Which Google Cloud product should the organization use?",
        "options": [
            "Google Cloud Console",
            "Cloud Trace",
            "Cloud Monitoring",
            "Cloud Logging"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization wants to migrate legacy applications currently hosted in their data center to the cloud. The current architecture dictates that each application needs its own operating system (OS) instead of sharing an OS. Which infrastructure solution should they choose?",
        "options": [
            "Virtual machines",
            "Open source",
            "Serverless computing",
            "Containers"
        ],
        "answer": [0] // A
    },
    {
        "question": "Why do organizations often struggle to scale their on-premises application infrastructure?",
        "options": [
            "Scaling compute instances could breach compliance and/or regulation",
            "Increasing compute capacity is time-consuming and costly",
            "Their serverless compute functions struggle to meet the demand",
            "Their multi-cloud architecture is complex and expensive"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to transform multiple types of structured and unstructured data in the cloud from various sources. The data must be readily accessible for analysis and insights. Which cloud data storage system should the organization use?",
        "options": [
            "Relational database",
            "Private data center",
            "Data field",
            "Data warehouse"
        ],
        "answer": [3] // D
    },
    {
        "question": "After rolling out a new update, an organization found a minor bug in its online video game. How should the organization approach this bug while following SRE principles?",
        "options": [
            "Accept and learn from the bug because failure is normal",
            "Accept and ignore the bug because it is only minor",
            "Hold a postmortem to reprimand the employee responsible for the bug",
            "Document bug correction to eliminate all future bugs"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants to use BigQuery data analytics to understand their website performance, but wants to move only some data into the cloud. Which environment should the organization use?",
        "options": [
            "Private cloud",
            "On-premises",
            "Multi-cloud",
            "Hybrid cloud"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization’s web developers and operations personnel use different systems. How will increasing communication between the teams reduce issues caused by silos?",
        "options": [
            "By assigning blame for failures and establishing consequences",
            "By combining job role responsibilities to ensure that everyone has shared access",
            "By increasing data encryption to strengthen workflows",
            "By emphasizing shared ownership of business outcomes"
        ],
        "answer": [3] // D
    },
    {
        "question": "How does Cloud SQL help organizations create business insights?",
        "options": [
            "Integrates with business intelligence and analytics platforms",
            "Generates predictions using machine learning models",
            "Generates real-time charts and intelligent analytics",
            "Transforms business data from unstructured to structured"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants to add a new function to their application. They want to write the code and let the public cloud provider handle the infrastructure. Which infrastructure solution should they use?",
        "options": [
            "Virtual machines",
            "Bare Metal Solution",
            "Serverless computing",
            "Container Registry"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to leverage tooling and automation as part of its new DevOps philosophy. Which operational challenge will this resolve?",
        "options": [
            "Repetitive manual tasks that hinder workflows",
            "Time-consuming supervision of creative tasks",
            "Distribution and supply-chain issues",
            "Defective technical equipment that limits innovation"
        ],
        "answer": [0] // A
    },
    {
        "question": "What is logging within the context of cloud technology?",
        "options": [
            "Writing application and operating system events as text",
            "Monitoring network and resource limitations",
            "Tracking source code across an organization",
            "Recording infrastructure and hardware expenditure"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization recently launched a virtual customer support agent, generating vast amounts of text and speech data. Why should they use a cloud data warehouse to interpret this data?",
        "options": [
            "To natively visualize both types of data using a dashboard in real time",
            "To ingest and analyze structured and unstructured data at scale, in real time",
            "To secure data transmission between cloud and on-premises environments",
            "To transform data from structured to unstructured"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization meets their service level objective (SLO) of 99.99% (five nines). How much downtime do their end users experience per year?",
        "options": [
            "A. 5 minutes",
            "B. 500 minutes",
            "C. 5 hours",
            "D. 5 days"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants full control of their virtual machine infrastructure for a custom home-grown application with a product that autoscale and automatically updates. Which Google Cloud product or solution should the organization use?",
        "options": [
            "A. Cloud Build",
            "B. Cloud Run",
            "C. Compute Engine",
            "D. App Engine"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization notices that some of their cloud expenditures are too high. What should the organization do to control costs?",
        "options": [
            "A. Streamline the hardware procurement process to reduce costs.",
            "B. Share cost views with the departments to establish more accountability.",
            "C. Change the cost model from operational expenditure to capital expenditure.",
            "D. Ensure that all cloud resources are tagged with a single tag."
        ],
        "answer": [1] // B
    },
    {
        "question": "What does Cloud Debugger help an organization do?",
        "options": [
            "A. Implement code updates in real time without affecting the service level objective (SLO).",
            "B. Inspect source code in real time without affecting user downtime.",
            "C. Manage code and accelerate application development.",
            "D. Analyze live source code during user downtime."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to build an entirely new infrastructure and applications in the cloud. Which application modernization approach should the organization use?",
        "options": [
            "A. Move the application to the cloud, and then change it.",
            "B. Change their application, and then move it to the cloud.",
            "C. Invent in greenfield.",
            "D. Invent in brownfield."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to upskill their IT staff. How can they do this in a transformational way?",
        "options": [
            "A. Prioritize training current employees instead of hiring new recruits with cloud experience.",
            "B. Prioritize giving privileged access to third-party partners and contractors to fill IT knowledge gaps.",
            "C. Create a culture of self-motivated, isolated learning with official training materials.",
            "D. Create a culture of continuous peer-to-peer learning with official training materials."
        ],
        "answer": [3] // D
    },
    {
        "question": "What is monitoring within the context of cloud operations?",
        "options": [
            "A. Observing cloud expenditure in real time to ensure that budgets are not exceeded.",
            "B. Collecting predefined and custom metrics from applications and infrastructure.",
            "C. Tracking user activities to guarantee compliance with privacy regulations.",
            "D. Tracing user location to document regional access and utilization."
        ],
        "answer": [1] // B
    },
    {
        "question": "How can a streaming service meet global compliance requirements using the cloud?",
        "options": [
            "A. By automatically encrypting personally identifiable information.",
            "B. By obtaining a business license to operate in a new market.",
            "C. By allowing users to disable two-factor authentication.",
            "D. By adhering only to data policies of the country in which the head office is registered."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants to introduce a new image recognition login system. What should the organization do to follow SRE principles?",
        "options": [
            "A. Roll out the new system to a subset of employees to test it out.",
            "B. Roll out the new system to all employees to collect as much data as possible.",
            "C. Avoid rolling out the new system because it may have security flaws.",
            "D. Avoid rolling out the new system because it may violate privacy policy."
        ],
        "answer": [0] // A
    },
    {
        "question": "Several departments in an organization are working together on a project. The organization wants to customize access to resources for each department. What is the quickest and most efficient way to achieve this?",
        "options": [
            "A. By mapping IAM roles to job functions for each department.",
            "B. By assigning IAM primitive roles to each employee.",
            "C. By applying least-privilege to roles for each employee.",
            "D. By creating a single shared service account for all departments."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants to create a new application in the cloud to replace an existing on-premises application. Which application modernization approach should the organization use?",
        "options": [
            "A. Move the application to the cloud, and then change it.",
            "B. Change their application, and then move it to the cloud.",
            "C. Invent in greenfield.",
            "D. Invent in brownfield."
        ],
        "answer": [3] // D
    },
    {
        "question": "How does Google Cloud ensure that customer data remains secure and private when at rest?",
        "options": [
            "A. By aggregating training data for customers within each industry.",
            "B. By automatically locking files containing suspicious code.",
            "C. By auditing platform privacy practices against industry standards.",
            "D. By providing privacy reviews for critical customer applications."
        ],
        "answer": [2] // C
    },
    {
        "question": "When an organization adopts cloud technology, how does their total cost of ownership (TCO) shift?",
        "options": [
            "A. Away from cost management toward capital expenditure.",
            "B. Away from operational expenditure toward cost management.",
            "C. Away from capital expenditure toward operational expenditure.",
            "D. Away from operational expenditure toward capital expenditure."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is altering their gaming product so that it is compatible with cloud technology. What can they expect when moving from traditional technology to cloud technology?",
        "options": [
            "A. No change to existing responsibilities.",
            "B. A shift toward OpEx.",
            "C. A shift toward using structured data.",
            "D. Increased hardware maintenance."
        ],
        "answer": [1] // B
    },
    {
        "question": "Why should an organization consider the total cost of ownership (TCO) when moving from on-premises to the cloud?",
        "options": [
            "A. To evaluate error budget.",
            "B. To understand service level availability.",
            "C. To evaluate return on investment.",
            "D. To calculate required compute power."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants a cost-effective relational database. Which Google Cloud service should the organization use?",
        "options": [
            "A. Cloud Storage.",
            "B. BigQuery.",
            "C. Cloud SQL.",
            "D. Dataflow."
        ],
        "answer": [2] // C
    },
    {
        "question": "Which policy helps Google Cloud keep customer data private?",
        "options": [
            "A. Google tests the service availability of customer applications.",
            "B. Google does not use customer data for advertising purposes.",
            "C. Google migrates customer data to an offline server when a threat is detected.",
            "D. Google does not allow customers to change encryption keys."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization’s developers are growing increasingly frustrated by the limitations of their on-premises infrastructure. How would they benefit from leveraging cloud technology?",
        "options": [
            "A. They can expect 100% service availability.",
            "B. They can avoid the limitations of serverless computing.",
            "C. They can have new tools to innovate and optimize resource usage.",
            "D. They can optimize maintenance for their on-premises infrastructure."
        ],
        "answer": [2] // C
    },
    {
        "question": "How is service availability measured in the context of cloud technology?",
        "options": [
            "A. Number of available regions.",
            "B. Percentage of uptime.",
            "C. Speed of response time.",
            "D. Number of downtime incidents."
        ],
        "answer": [1] // B
    },
    {
        "question": "A cloud-native organization is not meeting their service level objective (SLO) but has not exhausted their error budget. What should the organization prioritize?",
        "options": [
            "A. Innovation to improve user experience.",
            "B. Hardware reliability to improve availability.",
            "C. Stability to avoid prolonged user downtime.",
            "D. Speed to release new features."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is moving away from an on-premises infrastructure. Instead, they want to create, access, and share information virtually in the cloud. What should the organization consider?",
        "options": [
            "A. Built-in security when moving their data to the cloud.",
            "B. Replacing their perimeter security with data encryption keys.",
            "C. Optimizing cost-management with a capital expenditure model.",
            "D. Increased hardware capacity when moving their data to the cloud."
        ],
        "answer": [0] // A
    },
    {
        "question": "What is artificial intelligence?",
        "options": [
            "A. Any system that ingests data in real time.",
            "B. Any system that automatically structures data.",
            "C. Any system capable of a task that requires smart analytics to generate predictions.",
            "D. Any system capable of a task that normally requires human cognition."
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization has an on-premises IT infrastructure. Their customer-facing application repeatedly fails during peak usage. What could be causing this issue?",
        "options": [
            "A. A serverless compute function struggles to scale.",
            "B. The application contains unclean data.",
            "C. They don't have enough servers to meet the demand.",
            "D. The application is only configurable on-premises."
        ],
        "answer": [2] // C
    },
    {
        "question": "How is privacy defined in the context of cloud technology?",
        "options": [
            "A. Restrictions on data access and sharing.",
            "B. Procedures to authenticate user identity.",
            "C. Susceptibility to data breaches and cyber attacks.",
            "D. Compliance with regulatory standards."
        ],
        "answer": [0] // A
    },
    {
        "question": "What does Cloud Logging help an organization do?",
        "options": [
            "A. Analyze live source code and log code updates.",
            "B. Deploy infrastructure as code.",
            "C. Analyze logs and accelerate application troubleshooting.",
            "D. Manage storage of custom VM images."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to write and run small pieces of code in a serverless way that respond to events like huge discounts. Which Google Cloud compute solution should the organization use?",
        "options": [
            "Google Kubernetes Engine",
            "Cloud Functions",
            "Bare Metal Solution",
            "Compute Engine"
        ],
        "answer": [1] // B
    },
    {
        "question": "A customer service department wants to increase their operational efficiency while maintaining personalized dialog with their customers. What Google Cloud product or service should the organization use?",
        "options": [
            "Recommendations AI",
            "Cloud Identity",
            "Contact Center AI",
            "Text-to-Speech"
        ],
        "answer": [2] // C
    },
    {
        "question": "What can customers expect if their cloud provider doesn’t meet their service level agreement (SLA)?",
        "options": [
            "Increase in subscription fees",
            "Cloud service shutdown",
            "Refund for service interruption",
            "Error budget expansion"
        ],
        "answer": [2] // C
    },
    {
        "question": "What is an example of structured data that a healthcare facility stores in their system?",
        "options": [
            "X-ray images",
            "Surgery video recordings",
            "Blood pressure history",
            "Physician-written notes"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to ensure that their developers can easily use application programming interfaces (APIs) in future projects. Which Google product or solution should they use?",
        "options": [
            "Application migration",
            "Apigee",
            "The App Engine flexible environment",
            "AppSheet"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization needs frequent access to only a subset of their data. They want to reduce costs by depositing the rest of their data across Nearline, Coldline, and Archive repositories. Which Google Cloud product should the organization use?",
        "options": [
            "Filestore",
            "Cloud Storage",
            "Data Catalog",
            "Cloud Spanner"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to move from a tactical cloud adoption approach to a transformational approach. How should they change their cloud security?",
        "options": [
            "Provide staff identities using only Google Cloud authentication.",
            "Provide multiple layers of network security using a zero-trust model.",
            "Emphasize strong perimeter security and trust in their private network.",
            "Emphasize three main Identity Access Management roles: owner, editor, and viewer."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is training a machine learning model to make predictions. What could improve the prediction accuracy of their model?",
        "options": [
            "An increase in storage capacity",
            "Higher network bandwidth",
            "An increase in training data",
            "Faster CPU processors"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to search hundreds of scanned documents for key information like dates, names, and other specific words. Why should the organization use application programming interfaces (APIs)?",
        "options": [
            "To replace the scanned documents with an online survey",
            "To ingest data in real time and encrypt unmatched words",
            "To create digital versions of the documents and locate key information",
            "To transform the documents into unstructured data."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization needs a platform to create custom end-to-end artificial intelligence models. Which Google Cloud product or service should the organization use?",
        "options": [
            "Dataproc",
            "Compute Engine",
            "Recommendations AI",
            "Vertex AI"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization is struggling to keep up with the growth of their application which is running on legacy infrastructure. What might be holding them back?",
        "options": [
            "The time it takes their serverless compute function to scale",
            "The overreliance on platform as a service",
            "The inaccessibility of their data due to perimeter security",
            "The cost of provisioning hardware for peak usage"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization wants to build autoscaling web applications without having to manage application infrastructure. Which Google Cloud product should they use?",
        "options": [
            "Anthos",
            "Apigee",
            "AutoML",
            "App Engine"
        ],
        "answer": [3] // D
    },
    {
        "question": "Which cybersecurity threat can lead to information being stolen or damaged without a user ever being aware?",
        "options": [
            "SLA policy violation",
            "Malware attack",
            "Ransomware attack",
            "Incomplete data input"
        ],
        "answer": [1] // B
    },
    {
        "question": "What is an organization exclusively responsible for when they access an application through a software as a service (SaaS) model?",
        "options": [
            "Maintaining overall system operability",
            "Maintaining customer-facing content",
            "Monitoring data center servers",
            "Monitoring computer networks"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization needs to train a custom machine learning model to categorize customer responses from their website's contact form. Which Google Cloud product or service should the organization use?",
        "options": [
            "Anthos",
            "Recommendations AI",
            "AutoML Natural Language",
            "Pub/Sub"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization has created an application that can diagnose different medical conditions when users submit images of their affected body parts. Which Google Cloud product or service did the organization use?",
        "options": [
            "Cloud Logging",
            "Cloud Profiler",
            "App Engine",
            "Machine Learning"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization suffers a major data leak only six months after upgrading its security system. What should the organization do to ensure long-term security?",
        "options": [
            "Extend data retention policy lengths to at least seven years.",
            "Pay more to get the best security system available on the market.",
            "Hire cybersecurity experts to further develop their data security plan.",
            "Wait for a more advanced security system to be released."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to better understand the behavior of their code in production and analyze its state to identify hard-to-find programming errors. Which Google Cloud tool should the organization use?",
        "options": [
            "Debugger",
            "Profiler",
            "Cloud Monitoring",
            "Trace"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization has started to develop cloud-native applications to replace their legacy applications. What else should the organization do to adopt the cloud?",
        "options": [
            "Provide privileged cloud network access to third-party partners.",
            "Migrate some of their legacy infrastructure to the cloud.",
            "Conduct maintenance on their legacy hardware.",
            "Increase CapEx on existing projects."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization has decided to create a mobile app for their customer-facing service. What may have prompted this business decision?",
        "options": [
            "Customers expect information to be easily accessible on any device",
            "Customers expect mobile-only access to information in the cloud era",
            "Developers can apply increased data security on a mobile app.",
            "Developers can run different versions of the service to test features only through a mobile app."
        ],
        "answer": [0] // A
    },
    {
        "question": "A retail organization has moved all of their inventory data to a relational database in the cloud. What functionality does a relational database offer?",
        "options": [
            "It stores large amounts of raw data in its original format",
            "It stores transactional data, which can then be accessed electronically",
            "It rapidly analyzes large and multi-dimensional datasets",
            "It analyzes unstructured data, which can then be accessed in multiple regions"
        ],
        "answer": [1] // B
    },
    {
        "question": "A public cloud provider's service level performance has moved below the service level objective (SLO), but remains above the service level agreement (SLA). What is an outcome of this change in service level performance?",
        "options": [
            "The public cloud provider is encouraged to push out new updates",
            "The public cloud provider is encouraged to prioritize service reliability",
            "End users face unexpected or prolonged downtime",
            "End users face a decrease in service latency"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is looking for a solution to help them build applications using their preferred programming language and tools. They also want to minimize time spent on infrastructure management. What solution should the organization use?",
        "options": [
            "Cloud Run",
            "Dataproc",
            "Pub/Sub",
            "Bare Metal Solution"
        ],
        "answer": [0] // A
    },
    {
        "question": "How does Google Cloud AI Hub make machine learning easy and accessible for Google Cloud customers to get started?",
        "options": [
            "It deploys artificial intelligence models in real time",
            "It automatically codes users' machine learning models",
            "It automatically sources and prepares users' machine learning data",
            "It includes a repository of plug-and-play artificial intelligence tools"
        ],
        "answer": [3] // D
    },
    {
        "question": "A venue with an online booking system has partnered with a catering business. How can the venue leverage application programming interfaces (APIs) to create new business value?",
        "options": [
            "Use an API to redesign their booking system to appeal to targeted customers",
            "Use an API to identify opportunities for new business collaboration",
            "Use an API to migrate all their customer data to a machine learning model to predict food requests",
            "Use an API to connect their booking system with the partner's catering form"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization has created a medical fitness app and wants to store a very large amount of data about exercise times, activity, and calories burned for later analysis. Which data management solution should the organization use?",
        "options": [
            "Data lake",
            "Data warehouse",
            "Data field",
            "Database"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is struggling to meet user demand for change and wants to modernize their legacy applications by moving the applications to the cloud. Why would this help the organization satisfy user expectations?",
        "options": [
            "Customer data can be used to offer tailored content",
            "Toil automation helps make automatic updates",
            "Updates can be pushed out more quickly to repair bugs",
            "DevOps requires that industry trends be measured and tracked"
        ],
        "answer": [2] // C
    },
    {
        "question": "What is out-of-the-box observability within the context of cloud operations?",
        "options": [
            "Monitoring project development timelines",
            "Monitoring IT infrastructure and applications",
            "Monitoring customer satisfaction and feedback",
            "Monitoring cloud subscription costs"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is looking for a business intelligence solution that allows individual employees and end users to analyze business data and generate insights. Which Google Cloud product or service should the organization use?",
        "options": [
            "Cloud Spanner",
            "BigQuery",
            "Looker",
            "Dataflow"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization cannot afford to modernize their infrastructure, but they want to process data from their legacy system in a modern platform hosted by a business partner. What solution should the organization choose to make their data accessible?",
        "options": [
            "Compute Engine",
            "Anthos",
            "An application programming interface",
            "Google Kubernetes Engine"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants a serverless execution environment for building and connecting cloud services. They can't predict how many resources they'll need. Which Google Cloud solution should they use?",
        "options": [
            "Compute Engine",
            "Google Kubernetes Engine",
            "Cloud Functions",
            "Bare Metal Solution for SAP"
        ],
        "answer": [2] // C
    },
    {
        "question": "An international bank is looking for a serverless warehouse solution that lets them perform smart analytics. Which Google Cloud product or service should the bank use?",
        "options": [
            "Cloud Spanner",
            "Compute Engine",
            "BigQuery",
            "Dataflow"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is struggling to ensure that their legacy systems meet rapidly changing IT needs. Why should the organization use application programming interfaces (APIs)?",
        "options": [
            "To expose all underlying data so third parties can make amends",
            "To completely re-architect legacy applications",
            "To achieve long-term operational flexibility",
            "To operate on a pay-as-you-go model so IT can scale flexibly"
        ],
        "answer": [2] // C
    },
    {
        "question": "How does switching from on-premises to the cloud help organizations gain value over time?",
        "options": [
            "They can expand their internal application hosting infrastructure",
            "They can focus their efforts on solution development",
            "They can increase development of data recovery systems",
            "They can relax their on-premises data security protocols"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is looking for a solution that will allow them to build new applications, modernize old ones, and run applications across different cloud providers. What solution should the organization use?",
        "options": [
            "Apigee Hybrid",
            "Anthos",
            "Cloud Run",
            "Compute Engine"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is looking for a storage solution that will help them serve content to users worldwide. They need a solution that offers a high level of availability. What feature of Cloud Storage would they benefit from?",
        "options": [
            "Multi-regional storage",
            "Global metadata",
            "Data encryption",
            "Object versioning"
        ],
        "answer": [0] // A
    },
    {
        "question": "A large retail organization uses traditional technology for their ecommerce website. During peaks in traffic, resources are often underutilized or overprovisioned. They have decided to migrate to cloud technology. What aspect of cloud technology will benefit their ecommerce business?",
        "options": [
            "Agile infrastructure means that they only pay for what they need, when they need it.",
            "Operational expenditure means that their total cost of ownership is more predictable.",
            "Unlimited storage means that their website will never experience downtime.",
            "Shared responsibility means that the cloud provider brings increased visibility during peaks in traffic."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization has been struggling to make operations more efficient. What site reliability engineering (SRE) best practice should the organization follow to increase efficiency?",
        "options": [
            "Decrease over-reliance on data to make decisions.",
            "Assign exclusive production ownership to developers.",
            "Spend less time measuring outage impact.",
            "Focus on increasing toil automation."
        ],
        "answer": [3] // D
    },
    {
        "question": "An international law firm needs their HR application to be able to share and access varying amounts of sensitive data across their branch offices. Why would using Cloud Storage be beneficial for them?",
        "options": [
            "It stores geographically dispersed copies of data to prevent loss.",
            "It offers an affordable upgrade that enables data encryption.",
            "It randomly allocates data to different storage locations to protect against threats.",
            "It has a low minimum storage amount requirement."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants to ingest custom log data from GKE environments, virtual machines, and Google Cloud services. Which Google Cloud tool should the organization use?",
        "options": [
            "Dialogflow",
            "Cloud Logging",
            "Cloud SDK",
            "Data Catalog"
        ],
        "answer": [1] // B
    },
    {
        "question": "What DevOps practice should an organization use when developing their application to help minimize disruption caused by bugs?",
        "options": [
            "Pause production until all bugs have been eliminated.",
            "Prioritize fixing large bugs during production because they are easier to review.",
            "Implement small changes incrementally to reduce recovery time when bugs appear.",
            "Implement large changes together to make rolling back easier when bugs appear."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is looking for a hybrid-cloud management solution that will help them build and run applications on-premises and in the cloud. What solution should the organization use?",
        "options": [
            "Anthos",
            "Cloud Functions",
            "App Engine",
            "Compute Engine"
        ],
        "answer": [0] // A
    },
    {
        "question": "What makes Google Kubernetes Engine (GKE) an effective solution for developers working to resolve application errors?",
        "options": [
            "It reduces the time needed to iterate on various solutions.",
            "It provides intelligent recommendations to optimize application development.",
            "It removes the need for containerizing applications.",
            "It stores application code on multiple servers to facilitate collaboration across silos."
        ],
        "answer": [0] // A
    },
    {
        "question": "What kind of architecture does a hybrid cloud offer organizations?",
        "options": [
            "A combination of different virtualized servers.",
            "A combination of serverless computing and public cloud services.",
            "A combination of private cloud infrastructure and public cloud services.",
            "A combination of multiple public cloud provider services."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization with a commissions-based business model is struggling to predict cloud costs due to fluctuating revenue. How can the organization optimize the use of their cloud resources?",
        "options": [
            "By applying intelligent recommendations.",
            "By decentralizing financial decision making.",
            "By sharing project ownership across all teams.",
            "By increasing their capital expenditure."
        ],
        "answer": [0] // A
    },
    {
        "question": "What is an organization responsible for when migrating from on-premises to the cloud?",
        "options": [
            "Covering the cost of cloud service downtime",
            "Managing underlying network infrastructure",
            "Adapting to a pay-as-you-go cloud expenditure model",
            "Optimizing cloud storage systems"
        ],
        "answer": [2] // C
    },
    {
        "question": "What is a benefit of the OpEx model for cloud security?",
        "options": [
            "Organizations do not need to make upfront investments in cloud security",
            "Organizations can deploy custom security hardware",
            "Organizations do not need to configure any security settings for cloud resources",
            "The cloud provider guarantees security"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants to duplicate critical system components to enhance reliability and mitigate single points of failure. Which design consideration should the organization use?",
        "options": [
            "Redundancy",
            "Backups",
            "Latency",
            "Security"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization stores backup files in Cloud Storage. The files will be accessed annually to test the disaster recovery plans. Which storage class is the most cost-effective?",
        "options": [
            "Coldline class",
            "Standard class",
            "Nearline class",
            "Archive class"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization is running SQL Server on-premises and is struggling with capacity and management overhead. They want to modernize this database quickly by using Google products or services. What should the organization do?",
        "options": [
            "Refactor applications to use a cloud first database like Firestore",
            "Perform a managed database migration to Cloud SQL",
            "Export old tables from SQL Server to Cloud Storage",
            "Migrate all SQL Server data to BigQuery"
        ],
        "answer": [1] // B
    },
    {
        "question": "What is the benefit of using a serverless data processing pipeline service?",
        "options": [
            "Full control over compute resources is provided.",
            "Processed data will not require analysis.",
            "Pipeline infrastructure is fully managed and scalable.",
            "Processed data is guaranteed to be free of errors."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to transfer some of its data from Google Cloud. Which of these statements is true?",
        "options": [
            "Customer data may not be transferred out of Google Cloud.",
            "Customers have full control of their data and may transfer it at any time.",
            "Outgoing data transfer must be enabled in the Google Cloud console.",
            "A technical support ticket must be raised with the correct department."
        ],
        "answer": [1] // B
    },
    {
        "question": "What does the shift toward cloud computing represent for an organization's transformation?",
        "options": [
            "An opportunity that is limited to large enterprises.",
            "An opportunity to redefine existing business processes and services.",
            "An opportunity that is only relevant to the IT department.",
            "An opportunity to continue business as usual with new cost savings."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is concerned about the unlikely event that Google Cloud infrastructure is physically accessed by someone with malicious intent. How is data protected in Google Cloud?",
        "options": [
            "Data is immediately deleted whenever an intrusion is detected.",
            "Data is stored on quantum computers with unbreakable encryption.",
            "Data is stored using robust encryption.",
            "Data is stored in random locations around the world to prevent it being found."
        ],
        "answer": [2] // C
    },
    {
        "question": "A vacation home rental organization wants to predict the popularity of properties in their upcoming busy season. They do not have a data science team, and want to use their in-house database administration skills to create a machine learning model. What should the organization do?",
        "options": [
            "Use custom training in Vertex AI with TensorFlow.",
            "Integrate pre-trained APIs into their application.",
            "Use BigQuery ML and create models using SQL.",
            "Build a model in AutoML using labeled data."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is using three cloud vendors to maximize their available deployment locations worldwide. They are using GKE Enterprise to deploy Kubernetes applications across different clouds. What type is this deployment?",
        "options": [
            "On-premises",
            "Multi-cloud",
            "Hybrid-cloud",
            "Private cloud"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization needs to rapidly scale its use of computing resources and honor its commitment to environmental sustainability. What should the organization do?",
        "options": [
            "Refactor application software to use less energy.",
            "Use a public cloud provider with energy-efficient data centers.",
            "Use a carbon-neutral energy provider for an existing on-premises data center.",
            "Purchase energy-efficient servers for an existing on-premises data center."
        ],
        "answer": [1] // B
    },
    {
        "question": "What is a defining feature of a non-relational database?",
        "options": [
            "Reporting across multiple data sources.",
            "A strictly enforced schema.",
            "A flexible data model.",
            "Queries that join multiple tables."
        ],
        "answer": [2] // C
    },
    {
        "question": "What is an example of unstructured data?",
        "options": [
            "Historical stock inventory.",
            "Product ratings.",
            "Customer orders.",
            "Call center transcripts."
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization needs a flexible and scalable NoSQL database with strong web and mobile application support. Which Google Cloud product or service should the organization use?",
        "options": [
            "Cloud Spanner.",
            "Cloud Storage.",
            "BigQuery.",
            "Firestore."
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization has migrated all workloads to the cloud and is reviewing their cloud security posture. Who is now responsible for securing the physical infrastructure of the data centers?",
        "options": [
            "The organization and the cloud service provider.",
            "Third-party security service providers.",
            "The cloud service provider.",
            "The organization."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants a purpose-built AI solution to increase efficiency and provide personalized interactions for their customer care team. Which Google Cloud AI solution should they use?",
        "options": [
            "Text-to-Speech API.",
            "Cloud Talent Solution.",
            "Document AI.",
            "Contact Center AI."
        ],
        "answer": [3] // D
    },
    {
        "question": "What is the typical cloud spending behavior of most organizations?",
        "options": [
            "Decentralized and variable.",
            "Centralized and variable.",
            "Decentralized and fixed.",
            "Centralized and fixed."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants to lease the resources they need for their customized servers from a cloud provider on a pay-as-you-go basis, instead of paying one time for hardware. Which service model should they use?",
        "options": [
            "Hybrid cloud.",
            "Software as a service.",
            "Infrastructure as a service.",
            "Platform as a service."
        ],
        "answer": [2] // C
    },
    {
        "question": "Within Google's Site Reliability Engineering framework, which concept measures how well a system is performing?",
        "options": [
            "Service-level agreement.",
            "Service-level indicator.",
            "Error reporting.",
            "Service-level objective."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to leverage cloud technologies but is concerned about vendor lock-in. What would mitigate this concern?",
        "options": [
            "Open standards.",
            "Database services.",
            "Service level agreements.",
            "Scalable infrastructure."
        ],
        "answer": [0] // A
    },
    {
        "question": "A cinema company wants to build a model to predict customer visit patterns for the coming year. They have three years of customer visit data across 300 theaters; however, the data has been stored in different formats by different theaters. They must train the ML model. What should they do?",
        "options": [
            "Use the last year of data so there are fewer inconsistencies for the model to handle.",
            "Transform the data into a consistent format.",
            "Group different format types and train a different model for each group.",
            "Choose an ML model type that can process different formats of input data."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to use an open source library with a flexible ecosystem of tools to create and train its own machine learning models. Which product or solution should the organization use?",
        "options": [
            "Cloud Functions.",
            "Apache Beam.",
            "Dataflow.",
            "TensorFlow."
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization must identify and fix security vulnerabilities in its cloud infrastructure and applications. Which Google Cloud service should they use?",
        "options": [
            "Security Command Center.",
            "Google Cloud Armor.",
            "Cloud Storage.",
            "VPC networks."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization has petabytes of data gathered from a wide range of sources. They want to use the data for strategic analysis and to guide business decisions. What type of service should they use?",
        "options": [
            "Multi cloud environment.",
            "Virtual machine environment.",
            "Hybrid cloud environment.",
            "Container environment."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization is developing a new container-based application. They do not know how popular the application will be when launched and they do not want to pay for idle infrastructure resources. Which benefit of serverless computing will address this concern?",
        "options": [
            "Disaster recovery.",
            "Reduced development costs.",
            "Scalability.",
            "Built-in security."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization has recently completed a migration from on-premises to Google Cloud. How has cost management been affected?",
        "options": [
            "Costs will primarily shift from CapEx to OpEx.",
            "Costs will primarily shift from OpEx to CapEx.",
            "Cost management will stay the same, but the total cost of ownership (TCO) will be lower.",
            "Cost management will stay the same, but the total cost of ownership (TCO) will be higher."
        ],
        "answer": [0] // A
    },
    {
        "question": "How does the resource hierarchy in Google Cloud help organizations implement security policies?",
        "options": [
            "Policies can be applied at the folder level and are inherited by projects inside the folder.",
            "Projects in the resource hierarchy are not affected by security policies.",
            "Policies can only be applied at the organization level and affect all projects.",
            "Policies can only be applied to individual projects."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization is considering the use of managed services when migrating to the cloud. Which routine tasks are typically provided automatically by a managed services platform?",
        "options": [
            "Managing user access.",
            "Patching and upgrades.",
            "Data archiving.",
            "Cost optimization."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to access a software application from a cloud vendor without the need to manage their own servers or write their own code. Which service model does this represent?",
        "options": [
            "Infrastructure as a service.",
            "Platform as a service.",
            "Software as a service.",
            "Functions as a service."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is deciding on the layout of their resource hierarchy in Google Cloud. They have several projects within a folder. What will happen when user access policies are applied to the folder?",
        "options": [
            "The policy will be inherited by the projects in the folder but will not affect their resources.",
            "The policy will be inherited by the projects and their resources within the folder",
            "The policy will be applied to all folders within the organization.",
            "The policy applies to the folder only, and will not be inherited by any projects."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to control what types of network traffic are allowed to enter and leave its network and access its applications. Which security measure should the organization use?",
        "options": [
            "2-Step Verification",
            "Privileged access",
            "Encryption keys",
            "Firewall rules"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization has a large archive of unstructured data, including video and audio files. Which storage solution should the organization use?",
        "options": [
            "Cloud Spanner",
            "Cloud Storage",
            "Cloud Bigtable",
            "Cloud SQL"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is running multiple workloads in containers and requires full control of how the workloads are configured. Which Google Cloud service should the organization use?",
        "options": [
            "Cloud Run",
            "Compute Engine",
            "Kubernetes Engine",
            "Cloud Functions"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization has an ecommerce application that requires a cost-effective, transactional database. The application will only serve customers in a single region. Which service should they use?",
        "options": [
            "BigQuery",
            "Cloud Bigtable",
            "Cloud Spanner",
            "Cloud SQL"
        ],
        "answer": [3] // D
    },
    {
        "question": "What is a benefit of Google's purpose-built servers compared to standard servers?",
        "options": [
            "They are optimized for specific tasks making them more efficient",
            "They are backwards compatible with legacy disk drives.",
            "They are cheaper to build than standard servers.",
            "They run software that cannot be deployed on standard servers."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization has collected petabytes of historical data. They need an analysis solution that is fast, scalable, and fully managed. Which Google product or service should the organization use?",
        "options": [
            "BigQuery",
            "Cloud SQL",
            "Firestore",
            "Cloud Storage"
        ],
        "answer": [0] // A
    },
    {
        "question": "A retail organization is training a model to recommend products to customers for an ecommerce website. The model was trained on previous purchases, but did not include demographic information on each buyer. What dimension of the data is responsible for the model's poor performance?",
        "options": [
            "Validity",
            "Accuracy",
            "Timeliness",
            "Completeness"
        ],
        "answer": [3] // D
    },
    {
        "question": "What is the Site Reliability Engineering (SRE) term for an organization’s desired level of reliability and performance?",
        "options": [
            "Service-level objective",
            "Enhanced support",
            "Scalable infrastructure",
            "Service-level indicator"
        ],
        "answer": [0] // A
    },
    {
        "question": "When customer data is uploaded to Google Cloud, who owns the data?",
        "options": [
            "A third party",
            "The customer and Google share ownership",
            "Google",
            "The customer"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization runs a batch data analysis workload on a virtual machine (VM). The workload can be easily restarted without losing work, and is not time critical. Organizations must choose the lowest cost option to run the workload. What option should they choose?",
        "options": [
            "A Preemptible Spot VM on Compute Engine",
            "A custom VM in a pay-as-you-go model on Compute Engine",
            "A standard VM in a pay-as-you-go model on Compute Engine",
            "A Cloud Function with a small memory limit"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization needs protection against distributed denial-of-service (DDoS) attacks. Which Google Cloud service should the organization use?",
        "options": [
            "Google Cloud Armor",
            "Cloud Build",
            "Cloud VPN",
            "Security Command Center"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization is deploying their servers to the cloud using the infrastructure as a service model. In the shared responsibility model, what is the cloud provider responsible for?",
        "options": [
            "Data access policies",
            "Security of the operating system",
            "Security of the software",
            "Physical security"
        ],
        "answer": [3] // D
    },
    {
        "question": "Customers are reporting very high latencies when accessing an application from the United States. The application is currently running in a single region in Europe. What should the organization do?",
        "options": [
            "Set up a new billing account in the United States.",
            "Run the application in additional zones in the European region.",
            "Run the application in additional regions in Europe.",
            "Run a replica of the application in a region in the United States."
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization has a large dataset that contains text transcripts of conversations between their customers and service representatives. They want an automated solution to identify the topics their customers care most about. Which service should the organization use?",
        "options": [
            "Vision API",
            "Speech-to-Text API",
            "Cloud Translation API",
            "Natural Language API"
        ],
        "answer": [3] // D
    },
    {
        "question": "A manufacturing organization has a large collection of images labeled as intact or defective parts. They want to use this data to build a simple solution to detect faulty parts on their production line. They have no data science expertise. Which solution should they use?",
        "options": [
            "Pre-trained APIs",
            "Document AI",
            "AutoML",
            "Discovery for Retail"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization needs to store daily transactional data such as customer records and purchase history. The data follows a consistent schema and is cross-referenced. Which type of service should the organization use?",
        "options": [
            "Non-relational database",
            "Data warehouse",
            "Relational database",
            "Data lake"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to ensure that they grant users only the permissions they require to perform their job responsibilities. Which security principle describes this approach?",
        "options": [
            "Cyber resilience",
            "Zero trust",
            "Least privilege",
            "Security by default"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is concerned about the risk of data loss that may occur due to hardware failures or cyber attacks. They want to restore their systems to a previous state if such an event occurs. What should the organization do?",
        "options": [
            "Set service level objectives (SLOs).",
            "Use Cloud Monitoring.",
            "Back up data regularly.",
            "Enable autoscaling."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is hosting an application in Europe, and customers in Asia are reporting slow response times despite their fast internet connection. What is the problem?",
        "options": [
            "Not enough application servers",
            "Network bandwidth",
            "Network latency",
            "Misconfigured application servers"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization processes batch sales data at the end of every month to analyze sales trends and derive business insights. They want to improve accuracy and make near real-time decisions. What should the organization do?",
        "options": [
            "Change from a relational database to a NoSQL database.",
            "Filter the data so reports are generated faster.",
            "Switch from batch processing to stream processing.",
            "Process batch reports weekly instead of monthly."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to run their custom application in the cloud in a flexible and scalable way without managing any infrastructure. Which service model should they use?",
        "options": [
            "Infrastructure as a service",
            "Platform as a service",
            "Software as a service",
            "Network as a service"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to adopt the advanced machine learning capabilities of Google Cloud. However, regulations require data to be stored in an on-premises data center. Which approach should the organization use?",
        "options": [
            "A hybrid-cloud approach",
            "A multi-cloud approach",
            "A public-cloud approach",
            "A private-cloud approach"
        ],
        "answer": [0] // A
    },
    {
        "question": "An information security organization must ensure that its service providers have ISO 27001 certification. They must also access supporting documentation. Which Google Cloud tool should they use?",
        "options": [
            "Compliance Reports Manager",
            "Security Command Center",
            "Network Intelligence Center",
            "Cloud Monitoring"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization is using Compute Engine and wants to receive sustained-use discounts. What should the organization do?",
        "options": [
            "Choose preemptible spot instances when creating virtual machines.",
            "Choose low-powered virtual machines.",
            "Nothing. Sustained use discounts are automatically applied.",
            "Commit to virtual machine usage for a one or three-year period."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is evaluating its defenses against cyber security threats and is concerned about the risks of social engineering by cyber criminals. How might these attacks happen?",
        "options": [
            "SQL injection attacks",
            "Physical damage to hardware",
            "Phishing emails",
            "Distributed denial-of-service attacks"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization has a large VMware environment that they want to migrate to the cloud. They want to retain existing operational processes and tools. Which Google Cloud service should the organization use?",
        "options": [
            "Compute Engine",
            "Google Cloud VMware Engine",
            "VMware vSphere",
            "Bare Metal Solution"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is building advanced machine learning models in Google Cloud using TensorFlow. They want to develop their models faster with purpose-built hardware. Which solution should the organization use?",
        "options": [
            "TPUs",
            "CPUs",
            "GPUs",
            "GPUs"
        ],
        "answer": [0] // A
    },
    {
        "question": "What is the purpose of an application programming interface (API)?",
        "options": [
            "To provide a set of instructions that allow computer programs to communicate with each other",
            "To provide cloud plugins for integrated development environments",
            "To connect networks from different cloud providers",
            "To manage multiple containerized workloads"
        ],
        "answer": [0] // A
    },
    {
        "question": "A financial organization has many customers who close their accounts every year. The organization wants to use data and AI to identify at-risk customers, so they can retain customers by offering discounts and improved services. What should the organization do?",
        "options": [
            "Create a dashboard of previous customers that have exited, and look for obvious correlations in the visualization.",
            "Create an ML model based on the demographics and activities of previous customers that exited.",
            "Create a survey for all customers to identify their current level of satisfaction.",
            "Create a report based on last year’s customer feedback."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization supplies electric car chargers in a nationwide network. They store customer and charging data in BigQuery. They want to efficiently upgrade and maintain their network to reduce waste and achieve their sustainability goals. How can Google Cloud services help the organization?",
        "options": [
            "Secure data access by using Identity and Access Management.",
            "Provide access to third-party developers by creating an API using Apigee.",
            "Create a model in BigQuery to predict future maintenance schedules.",
            "Move data from BigQuery to Cloud Storage to reduce storage costs."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to refactor their application by using a microservices architecture when migrating to the cloud. Which benefit would this action provide?",
        "options": [
            "The refactored application is more efficient and scalable.",
            "No code changes will be required.",
            "This migration pattern provides the fastest path to the cloud.",
            "The application will become PCI DSS compliant by default."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization is deploying applications to the cloud using platform as a service. In the shared responsibility model, what remains the responsibility of the customer organization?",
        "options": [
            "Operations",
            "Data access policies",
            "Physical security",
            "Network security"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is planning to deploy a new workload to Google Cloud. They need an accurate estimate of the likely costs of running the workload. How should the organization create this estimate?",
        "options": [
            "Use the Google Cloud Pricing Calculator.",
            "Deploy workload to test environment to observe costs.",
            "Use historic costs of existing similar workload.",
            "Refer to pricing information and manually calculate an estimate."
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization has petabytes of data gathered from a wide range of sources. They want to use the data for strategic analysis and to guide business decisions. What type of service should they use?",
        "options": [
            "Object store",
            "Non-relational document database",
            "Data warehouse",
            "Relational transactional database"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is using new technologies to change its business processes and culture to develop new customer experiences and adapt to market dynamics. What is the name of this approach?",
        "options": [
            "Digital transformation",
            "Data center migration",
            "Operations optimization",
            "User personalization"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants to deploy new workloads to the cloud but must keep some systems on-premises for compliance reasons. Both environments must be managed centrally. Which type of environment should the organization use?",
        "options": [
            "Virtual machine environment",
            "Multi cloud environment",
            "Hybrid cloud environment",
            "Container environment"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is developing applications by using Kubernetes. They want their teams to spend more time developing rather than managing clusters. Which Google Cloud service should the organization choose?",
        "options": [
            "GKE Autopilot",
            "Compute Engine",
            "Cloud Run",
            "GKE Standard"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization stores its important industry data in a relational database. They want to create a new revenue stream by enabling third parties to use that data in their applications. Which cloud first approach should the organization choose?",
        "options": [
            "Add third-party users to their database.",
            "Offer chargeable downloads of archived data.",
            "Expose data through a chargeable API.",
            "Transfer data into a non-relational database."
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization wants to build a data pipeline to transform its data so it can be reconciled in a data warehouse. The solution must be scalable and require little or no management. Which Google product or service should the organization choose?",
        "options": [
            "Cloud Bigtable",
            "Cloud Storage",
            "Pub/Sub",
            "Dataflow"
        ],
        "answer": [3] // D
    },
    {
        "question": "What is the benefit of using a unified cloud data solution?",
        "options": [
            "Data will always cost less to store.",
            "Data can be automatically secured from external threats.",
            "Data will always be backed up and cannot be lost or deleted.",
            "Data can enable innovation because it's no longer siloed."
        ],
        "answer": [3] // D
    },
    {
        "question": "When is data automatically encrypted in Google Cloud?",
        "options": [
            "When it is in transit only.",
            "When it is at rest and in transit.",
            "Data is not automatically encrypted by default.",
            "When it is at rest only."
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization needs to increase the speed at which they can train machine learning models. Which domain-specific hardware is designed for this task?",
        "options": [
            "Bare Metal Solution",
            "Preemptible or Spot VMs",
            "Cloud TPUs",
            "Containers"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization must verify the identity of a user seeking access to a system. Which aspect of cloud identity management does this action describe?",
        "options": [
            "Authorization",
            "Authentication",
            "Auditing",
            "Encrypting"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is running Kubernetes applications across multiple cloud environments. They want a consistent and centralized management platform. Which service should they choose?",
        "options": [
            "Cloud Functions",
            "GKE Enterprise",
            "Cloud Run",
            "Compute Engine"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization wants to collect and store all logs generated by applications running in Google Cloud. Which service should they use?",
        "options": [
            "Cloud Profiler",
            "Cloud Monitoring",
            "Cloud Trace",
            "Cloud Logging"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization has migrated several large databases to the cloud. It wants to increase the value of its data, improve cost controls and strengthen regulatory compliance. What should the organization do?",
        "options": [
            "Delete data stored for over a year.",
            "Export relational data to modern NoSQL databases.",
            "Create monthly reports on data access and uses.",
            "Establish an effective data governance program."
        ],
        "answer": [3] // D
    },
    {
        "question": "Which scenario is a good use case for machine learning?",
        "options": [
            "Classifying data with no prior examples",
            "Tasks that require human experience and intuition",
            "Creating customer recommendations",
            "Solving ethical dilemmas"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is concerned that one of their applications takes too long to return a result. According to Google's 'Four Golden Signals', which signal measures this aspect of the application's performance?",
        "options": [
            "Saturation",
            "Errors",
            "Latency",
            "Traffic"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is transforming their raw data into a format that can be used to derive business insights. Which step of the data value chain does this action represent?",
        "options": [
            "Data analysis",
            "Data collection",
            "Data storage",
            "Data processing"
        ],
        "answer": [3] // D
    },
    {
        "question": "How does the legal concept of data sovereignty affect data?",
        "options": [
            "Data is subject to the laws and regulations of the country where it resides.",
            "A country has the right to access the data generated within its borders.",
            "An individual has the right to control their personal data.",
            "Data must always be encrypted in transit and at rest."
        ],
        "answer": [0] // A
    },
    {
        "question": "In Google's cloud security model, how does availability contribute to a robust security posture for data?",
        "options": [
            "By restricting data access to authorized users",
            "By ensuring data meets industry standards",
            "By checking that data is accurate and trustworthy",
            "By ensuring data is reliable and accessible"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization has hired a team of data scientists and developers. They want to create unique value in their business by coding an advanced machine learning model in Vertex AI Workbench. Which service should the organization use to train the model?",
        "options": [
            "Custom training",
            "AutoML",
            "Compute Engine",
            "Prebuilt APIs"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization has a small development team that has created a web application which runs in a single container. They need a simple, serverless, and scalable way to host their container. Which Google service should the organization use?",
        "options": [
            "Compute Engine",
            "App Engine",
            "Kubernetes Engine",
            "Cloud Run"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization wants to build custom machine learning models. They require a managed platform that provides services to gather data, build models, and then deploy and monitor those models. Which service should they use?",
        "options": [
            "Document AI",
            "Natural Language API",
            "Kubernetes Engine",
            "Vertex AI"
        ],
        "answer": [3] // D
    },
    {
        "question": "An organization wants to migrate a workload to the cloud without changing the application code or architecture. Which migration path describes this approach?",
        "options": [
            "Rehosted",
            "Reimagined",
            "Replatformed",
            "Refactored"
        ],
        "answer": [0] // A
    },
    {
        "question": "An organization wants a centralized view of their cloud infrastructure in a fully managed system that includes uptime checks. Which Google Cloud service should they use?",
        "options": [
            "Cloud Trace",
            "Cloud Monitoring",
            "Cloud Logging",
            "Cloud Profiler"
        ],
        "answer": [1] // B
    },
    {
        "question": "Which scenario uses machine learning to unlock business value from unstructured data?",
        "options": [
            "Analyzing tabular records of product defects to predict future maintenance cycles.",
            "Recommending new products based on previous purchases.",
            "Monitoring financial transactions to identify potential fraud and risk.",
            "Determining customer sentiments from call center voice recordings."
        ],
        "answer": [3] // D
    },
    {
        "question": "What is a defining function of streaming analytics?",
        "options": [
            "Processing data records continuously",
            "Processing data records in batches",
            "Processing a one-off data backfill",
            "Accessing data with high latency"
        ],
        "answer": [0] // A
    },
    {
        "question": "What is generative AI?",
        "options": [
            "A machine learning model for language translation",
            "A specific field of AI that can be used to create content",
            "An umbrella term that includes all types of machine learning algorithms",
            "An AI model for labeling images"
        ],
        "answer": [1] // B
    },
    {
        "question": "An organization is running critical workloads in production and requires a Google Cloud support service with fast response times and a dedicated Technical Account Manager. Which customer care service level should the organization choose?",
        "options": [
            "Enhanced",
            "Basic",
            "Premium",
            "Standard"
        ],
        "answer": [2] // C
    },
    {
        "question": "An organization is concerned about their cloud costs. They want to be informed when their spending exceeds a specific threshold, rather than waiting to see their bill at the end of the month. What should the organization do?",
        "options": [
            "Pause virtual machines during non-business hours.",
            "Configure a budget threshold rule and alert",
            "Adjust project resource quota policies.",
            "Use historical cost data to predict future overspend."
        ],
        "answer": [1] // B
    },
    {
        "question": "A real estate organization processes photos of properties uploaded by their agents to an internal application. They must manually check and remove photos that contain personally identifiable information like passports and credit cards. They want a solution that their developer can use to integrate with their app as quickly as possible. Which solution should they use?",
        "options": [
            "Pre-trained APIs",
            "AutoML",
            "Custom training",
            "BigQuery ML"
        ],
        "answer": [0] // A
    }
]





