if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: "394099450767428",
        secret: "b59fe538d4f3b02aaf8939360f2662a0"
    });
}