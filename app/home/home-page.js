function startNewRound(args)
{
    const button = args.object;
    const page = button.page;
    page.frame.navigate("NewRound/NewRound");
};

exports.startNewRound = startNewRound;
