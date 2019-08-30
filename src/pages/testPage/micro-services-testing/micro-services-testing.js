import React from 'react';
import ContentComponent from '../../../components/contentComponent/contentComponent';
import '../../../index.css';

function MicroServicesTesting() {

    const Topics = ['What is Micro Service testing?', 'Importance of Micro Service Testing', 'How to test Micro services', 'Sample tools to use', 'Live example tests'];

    return (

        <div >

            <ContentComponent
                header="Micro Services Testing"
                topics={Topics}
            >

                <div id={Topics[0]} className="borderAndBackColor">
                    <h3>{Topics[0]}</h3>
                    <p className="paragraphStart">Micro service architectures are small components designed to coexist with each other. As such issues identified can easily be compartmentalised leading to which microservice is responsible for errant behavior compared to their Monolith counterparts where errant behavior could be possibly due to multiple reasons.</p>
                    <br />
                    <p className="paragraph">Different type of tests a micro service should undergo:
                        <ul className="unorderedList">
                            <li>Unit test</li>
                            <li>Functional/Component test</li>
                            <li>Integration test</li>
                            <li>E2E test</li>
                            <li>Contract test</li>
                        </ul>
                    </p>
                    <p className="paragraph">Different criterias of a good test which ideally a microservice tests should have are :
                        <ul className="unorderedList">
                            <li>Fail fast</li>
                            <li>Shift left approach</li>
                            <li>Small tests but many</li>
                            <li>Easy maintainable</li>
                            <li>Quickly automatable</li>
                        </ul>
                    </p>
                    <br />

                    <h4>UNIT TEST</h4>
                    <p className="paragraphStart">
                        Unit tests exercise the small pieces of software such as a function in the application to determine whether they produce the desired output given a set of known inputs.
</p>
                    <p className="paragraph">
                        <b>Eg:</b> A field in API response should be in UUID format , whereas if not covered in unit test the test would pass with a random String bieng passed in place of UUID or a field has restriction on number of chracters it can accept.
</p>
                    <p className="paragraph">
                        <b>Tools/library</b> :JUNIT, NUNIT, RSPEC etc.
</p>
                    <br />

                    <h4>FUNCTIONAL/COMPONENT TEST</h4>
                    <p className="paragraphStart">
                        Functinal test is testing of the whole service itself but in isolation i.e. using test doubles or mocks for all other dependencies on which the service depends on to behave as is expected out of it.Dependencies includes Database, other microservice, MQ's etc which all can be mocked or stubbed. One of the major objective of functional test is it tests the behavior of the service without depending on dependencies which service needs as such need for an full fledged environment is eliminated.
</p>
                    <p className="paragraph">
                        <b>Eg:</b> Microservice responding with 200 on providing correct credential and 401 on incorrect credential.
</p>
                    <p className="paragraph">
                        <b>Tools/library</b> :JKARATE, APIARY, RESTASSURED, FRISBY, TestRestTemplate etc
</p>
                    <br />

                    <h4>INTEGRATION TEST</h4>
                    <p className="paragraphStart">
                        Integration test primarily test inter-service communication and hence depends on full fledged environment having instances of all dependent services and components in place.
</p>
                    <p className="paragraph">
                        It tests the co-existense of service under test with other services and dependency and checks overall behavior of the system of which service is a small part.
</p>
                    <p className="paragraph">
                        <b>Eg:</b> Service getting error code on calling other service if not providing required parameter to called service
</p>
                    <p className="paragraph">
                        <b>Tools/library</b> :JKARATE, APIARY, RESTASSURED, FRISBY, TestRestTemplate, POSTMAN etc
</p>
                </div>
                <br />
                <hr />
                <br />
                <div id={Topics[1]} className="borderAndBackColor">
                    <h3>{Topics[1]}</h3>
                    <p className="paragraphStart">It is very important to test the microservices as it gives confidence about the assumptions made for each service and how it integrates with other services to for a system. Testing of microservices is the first step in making the service reliable for the user. For the internal functional dependency of the microservices, the testing is more important for the service to stay strong. At the same time focus is also to automate the maximu tests so as to achieve consistency and repeatability of features and reduce longer test cycles.</p>
                    <br />
                </div>
            </ContentComponent>

        </div>
    );
}

export default MicroServicesTesting;
