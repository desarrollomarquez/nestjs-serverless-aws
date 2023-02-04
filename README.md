# How to create a Rest API using the serverless framework to use only AWS pay-per-use services, using nestjs as a development framework?
<br />
<div align="center">
  <img align="center" alt="Ilustrator API Rest Serverless Framework" src="https://github.com/desarrollomarquez/nestjs-serverless-aws/blob/main/images/serverless_framework_lambda.jpg" />
</div>
<br />
<p>

- The basic need is that we need to create a Rest API using Serverless charge-only services.

- The solution will be to define the project through a typical development of a service in nestjs with typescript where initially we will deploy on a local machine and then we will deploy to an AWS account using the Serverless Framework.
</p>
<br />
<h2>Tools or Services:</h2>
<div>
  <ul>
  <li type="disc">Api Gateway</li>
  <li type="disc">Lamda Function</li>
  <li type="disc">DynamoDB</li>
  <li type="disc">Cloudwatch</li>
  <li type="disc">IAM Policys</li>
  <li type="disc">Nestjs Framework</li>
  </ul>
</div>
<h2>Steps:</h2>
 <h4>1. Requirements to use AWS CLI:</h4>
<div>
  <ul>
  <li type="disc">AWS account.</li>
  <li type="disc">IAM credentials. (Username and Password to enter the console).</li>
  <li type="disc">IAM access key pair. (Access Key ID and Secret Access Key).</li>
  </ul>
</div>
 <h4>2. Installing and updating the AWS CLI:</h4>
<p>
Linux/Ubuntu:
<br>
<br>
<ul>
<li>curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"</li>
<li>unzip awscliv2.zip</li>
<li>sudo ./aws/install</li>
</ul>
Windows:
<br>
<br>
<ul>
- Download and run the AWS CLI MSI installer for Windows (64-bit):
<br>
<li> https://awscli.amazonaws.com/AWSCLIV2.msi </li>
- You can also run the msiexec command to run the MSI installer from PowerShell:
<br>
<li> msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi </li>
</ul>
</p>
<h4>3. AWS CLI Quick Configuration:</h4>
<p>
Execute the command:
<br>
<ul>
<li>aws configure</li>
</ul>
Replace it with your own AWS user account values, as described:
<br>
<br>
<ul>
<li> AWS Access Key ID [None]: XXXXXXXXXXXXXXXXXXXX </li>
<li> AWS Secret Access Key [None]: XXXXXXXXXXXXXXXXXXXXXXXXXXXXX </li>
<li> Default region name [None]: us-east-1</li>
<li>Default output format [None]: json</li>
</ul>
Validate the AWS CLI configuration:
<br>
<br>
<ul>
<li>aws configure list</li>
</ul>
</p>
<h4>4. Configuration of the Serverless Framework Project:</h4>
<p>
Clone the Serverless Framework project:
<br>
<ul>
<li>sudo git clone https://github.com/desarrollomarquez/nestjs-serverless-aws.git</li>
</ul>
Move to the root folder:
<br>
<br>
<ul>
<li> cd nestjs-serverless-aws/ </li>
</ul>
</p>
<h4>5. Create .env for Project:</h4>
<p>
The .env environment file must be created with the following variables, these can vary the values:
<br>
<ul>
<li>IS_OFFLINE=true</li>
<li>DYNAMODB_ENDPOINT=http://localhost:5000</li>
<li>USERS_TABLE_NAME=BooksTable</li>
</ul>
</p>
<h4>6. Install dependencies:</h4>
<p>
Install global dependencies :
<br>
<ul>
<li>sudo npm install --save aws-serverless-fastify or sudo npm install</li>
</ul>
Install the Serverless Framework dependencies for the services to use:
<br>
<br>
<ul>
<li> sudo serverless plugin install -n serverless-plugin-optimize  </li>
<li> sudo serverless plugin install -n serverless-dynamodb-local   </li>
<li> sudo serverless plugin install -n serverless-offline  </li>
</ul>
Install dynamodb locally for development mode (dev):
<br>
<br>
<ul>
<li> sudo serverless dynamodb install  </li>
</ul>
</p>

<h4>7. Deployment in Dev:</h4>
<p>
Generate the build and deploy the serverless development project (dev) offline, here we can perform tests locally to verify the project configuration before deploying to the AWS account:
<br>
<ul>
<li>sudo npm run build && serverless offline start</li>
</ul>
<br />
<div align="center">
  <img align="center" alt="Ilustrator API Rest Serverless Framework" src="https://github.com/desarrollomarquez/nestjs-serverless-aws/blob/main/images/serverless_offline.jpg" />
</div>
<br />
</p>

<h4>8. Deployment in AWS:</h4>
<p>
Generate the build and deploy the serverless project in AWS:
<br>
<ul>
<li>sudo serverless deploy</li>
</ul>
Verify the correct Serverless deployment in AWS of the Service:
<br/>
<div align="center">
  <img align="center" alt="Ilustrator API Rest Serverless Framework" src="https://github.com/desarrollomarquez/nestjs-serverless-aws/blob/main/images/serverless_deploy.jpg" />
</div>
should display the endpoints and lambda functions generated from the code for consumption.
<br />
</p>

<h4>9. Test Services:</h4>
<p>
Test the operation of the services that allow us to consume endpoints, such as Postman or another tool of your choice, Create .json to be consumed by a POST of the lambda function:
<br/>
<div align="center">
  <img align="center" alt="Ilustrator API Rest Serverless Framework" src="https://github.com/desarrollomarquez/nestjs-serverless-aws/blob/main/images/Post_postman.jpg" />
</div>
<br />
Verify through GET that the information is being stored in DynamoDB by requesting:
<br/>
<br />
<div align="center">
  <img align="center" alt="Ilustrator API Rest Serverless Framework" src="https://github.com/desarrollomarquez/nestjs-serverless-aws/blob/main/images/Get_postman.jpg" />
</div>
<br />
In this case, the serverless service is working correctly through the endpoint delivered by the deployment to AWS.
<br />
<br />
<br />
Review of the services used for deployment in the AWS console:
<br />
<br />
<div align="center">
  <img align="center" alt="Ilustrator API Rest Serverless Framework" src="https://github.com/desarrollomarquez/nestjs-serverless-aws/blob/main/images/servicios_consola.jpg" />
</div>
</p>

<h4>10. Remove the serverless project from AWS:</h4>
<p>
<ul>
<li>sudo serverless remove</li>
</ul>
<br/>
<div align="center">
  <img align="center" alt="Ilustrator API Rest Serverless Framework" src="https://github.com/desarrollomarquez/nestjs-serverless-aws/blob/main/images/serverless_remove.jpg" />
</div>

</p>


I hope I have given you a hand if you have doubts write me. successes!
⭐️ From [@Diego Márquez](https://github.com/desarrollomarquez)
