using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Net.Sockets;
using System.Text;
using System.IO;
#if DEBUG
    using System.Diagnostics;
using System.Text.RegularExpressions;
#endif
 
namespace DnsChecker
{
    /// <summary>
    /// Summary description for DomainService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class DomainService : System.Web.Services.WebService
    {
 
        [WebMethod]
        public string CheckDomain(string domain)
        {
            //some error checking
            if (string.IsNullOrEmpty(domain))
                throw new ArgumentNullException(domain, "Domain was not specified");
 
            //will contain the response from the server
            string response = string.Empty;
            TcpClient tcpClient = null;
            try
            {
                //convert to byte[] to send over stream
                byte[] byteDomain = Encoding.ASCII.GetBytes(domain + "\r\n");
                //create connection
                tcpClient = new TcpClient("whois.crsnic.net", 43);//possible exception that extension is not in list
                //get stream
                Stream objStream = tcpClient.GetStream();
                //write to the stream
                objStream.Write(byteDomain, 0, byteDomain.Length);
                //get response
                StreamReader objReader = new StreamReader(tcpClient.GetStream(), Encoding.ASCII);
                //read the response
                response = objReader.ReadToEnd();
 
#if DEBUG
                Debug.WriteLine("--[" + domain + "]------------------");
                Debug.WriteLine(response);
                Debug.WriteLine("---------------------------------------");
#endif
            }
            catch (Exception ex)
            {
#if DEBUG
                Debug.WriteLine("--[" + domain + "]------------------");
                Debug.WriteLine("ERROR FOR " + domain + ex.Message);
                Debug.WriteLine("---------------------------------------");
#endif
                //maybe send some mail in case the whois server is down
                throw;//throw the error after writing the debug info so the client can deal with it
            }
            finally
            {
                //close connection
                tcpClient.Close();
            }
 
            //string to return
            string returnValue = string.Empty;
            //see if it is registered or not
            if (Regex.IsMatch(response, "No match for ", RegexOptions.IgnoreCase))
            {
                //yes it is registered
                returnValue = "available";
            }
            else if (Regex.IsMatch(response, "Registrar:", RegexOptions.IgnoreCase))
            {
                //no it is not registered
                returnValue = "registered";
            }
            else
            {
                //maybe some error returned from the server, i.e. disconnected 
                throw new Exception("Unknown response from server");
            }
            return returnValue;
        }
    }
}